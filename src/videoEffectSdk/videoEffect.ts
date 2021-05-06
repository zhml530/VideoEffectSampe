namespace microsoftTeams {
  export enum VideoFrameFormat {
    RGB,
    NV12,
  }
  export interface VideoFrame {
    width: number;
    height: number;
    format: VideoFrameFormat;
    data: Uint8ClampedArray;
    personMask: Uint8ClampedArray;
  }

  export enum EffectChangeType {
    EffectChanged,
    EffectDisabled,
  }

  /**
   * Video frame Call back definition
   * @param frame the video frame
   * @param notifyVideoFrameProcessed A call back funtion used to notify the video frame processing is finished.
   * @param notifyError callback funtion used to notify error happens.
   */
  type VideoFrameCallback = (
    frame: VideoFrame,
    notifyVideoFrameProcessed: () => void,
    notifyError: (errorMessage: string) => void
  ) => void;

  type VideoEffectCallBack = (effectName: string | undefined) => void;

  export class VideoApp {
    videoEffectCallback: VideoEffectCallBack | null;
    videoFrameCallback: VideoFrameCallback | null;
    videoFormat = VideoFrameFormat.NV12;
    rootOrigin: string;
    public constructor() {
      this.videoEffectCallback = null;
      this.videoFrameCallback = null;
      this.rootOrigin = "*";
    }

    /***************************Start of public API section*****************************/
    //VideoApp should call register to read the video frames in Permissions section.
    public registerForVideoFrame(
      processFrame: VideoFrameCallback,
      format: VideoFrameFormat
    ): void {
      this.videoFrameCallback = processFrame;
      this.videoFormat = format;
      //connect the callback with video processor, the format paramter won't be used in this sample
      this.setupConnection();
    }

    //When user select different video effect, VideoApp extension should call this to notify Teams Client current selected
    //effect parameter changed.
    //If it's pre-meeting, Teams client will call videoEffectCallback immediately then use the videoEffect.
    //else if it's in-meeting scenario, we will call videoEffectCallback when apply button clicked.
    public notifySelectedVideoEffectChanged(
      effectChangeType: EffectChangeType
    ): void {
      top.postMessage(
        {
          type: "VideoEffectChanged",
          effectChangeType: effectChangeType,
        },
        this.rootOrigin
      );
    }

    //Register the video effect callback, Teams client uses this to notify the videoApp extension
    //new video effect will by applied.
    public registerForVideoEffect(callback: VideoEffectCallBack): void {
      this.videoEffectCallback = callback;
    }
    /******************************End of public API section**************************/

    //the following helper methods simulate the conmunication between Teams client and Video App
    //this code just for demo how it works, the final implemenation will be different with this
    private receiveMessage(event: MessageEvent<any>): any {
      const type = event.data.type;
      if (type === "NewVideoFrame") {
        if (this.videoFrameCallback != null) {
          this.videoFrameCallback(
            {
              ...event.data.videoFrame,
              data: new Uint8ClampedArray(event.data.videoFrame.data),
            },
            this.notifyVideoProcessed.bind(this),
            this.notifyError.bind(this)
          );
        } else {
          this.notifyVideoProcessed();
        }
      } else if (type === "EffectParameterChange") {
        if (this.videoEffectCallback != null) {
          this.videoEffectCallback(event.data.effectName);
        }
      } else {
        console.log("Unsupported message type" + type);
      }
    }

    //Simulate the connection between videoApp and Teams
    private setupConnection(): void {
      window.addEventListener("message", this.receiveMessage.bind(this), false);
      top.postMessage(
        {
          type: "SubscribeVideoFrames",
          config: {
            format: this.videoFormat,
          },
        },
        this.rootOrigin
      );
    }

    private notifyError(errorMessage: string): void {
      top.postMessage(
        {
          type: "VideoProcessError",
          message: errorMessage,
        },
        this.rootOrigin
      );
    }

    //Simulate sending notification to Teams client finished the video frame processing, now Teams client can render this video frame
    //or pass the video frame to next one in video pipeline
    private notifyVideoProcessed(): void {
      top.postMessage(
        {
          type: "VideoFrameProcessed",
        },
        this.rootOrigin
      );
    }
  }
}
