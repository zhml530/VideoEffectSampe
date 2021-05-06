var microsoftTeams;
(function (microsoftTeams) {
    let VideoFrameFormat;
    (function (VideoFrameFormat) {
        VideoFrameFormat[VideoFrameFormat["RGB"] = 0] = "RGB";
        VideoFrameFormat[VideoFrameFormat["NV12"] = 1] = "NV12";
    })(VideoFrameFormat = microsoftTeams.VideoFrameFormat || (microsoftTeams.VideoFrameFormat = {}));
    let EffectChangeType;
    (function (EffectChangeType) {
        EffectChangeType[EffectChangeType["EffectChanged"] = 0] = "EffectChanged";
        EffectChangeType[EffectChangeType["EffectDisabled"] = 1] = "EffectDisabled";
    })(EffectChangeType = microsoftTeams.EffectChangeType || (microsoftTeams.EffectChangeType = {}));
    class VideoApp {
        constructor() {
            this.videoFormat = VideoFrameFormat.NV12;
            this.videoEffectCallback = null;
            this.videoFrameCallback = null;
            this.rootOrigin = "*";
        }
        registerForVideoFrame(processFrame, format) {
            this.videoFrameCallback = processFrame;
            this.videoFormat = format;
            this.setupConnection();
        }
        notifySelectedVideoEffectChanged(effectChangeType) {
            top.postMessage({
                type: "VideoEffectChanged",
                effectChangeType: effectChangeType,
            }, this.rootOrigin);
        }
        registerForVideoEffect(callback) {
            this.videoEffectCallback = callback;
        }
        receiveMessage(event) {
            const type = event.data.type;
            if (type === "NewVideoFrame") {
                if (this.videoFrameCallback != null) {
                    this.videoFrameCallback(Object.assign(Object.assign({}, event.data.videoFrame), { data: new Uint8ClampedArray(event.data.videoFrame.data) }), this.notifyVideoProcessed.bind(this), this.notifyError.bind(this));
                }
                else {
                    this.notifyVideoProcessed();
                }
            }
            else if (type === "EffectParameterChange") {
                if (this.videoEffectCallback != null) {
                    this.videoEffectCallback(event.data.effectName);
                }
            }
            else {
                console.log("Unsupported message type" + type);
            }
        }
        setupConnection() {
            window.addEventListener("message", this.receiveMessage.bind(this), false);
            top.postMessage({
                type: "SubscribeVideoFrames",
                config: {
                    format: this.videoFormat,
                },
            }, this.rootOrigin);
        }
        notifyError(errorMessage) {
            top.postMessage({
                type: "VideoProcessError",
                message: errorMessage,
            }, this.rootOrigin);
        }
        notifyVideoProcessed() {
            top.postMessage({
                type: "VideoFrameProcessed",
            }, this.rootOrigin);
        }
    }
    microsoftTeams.VideoApp = VideoApp;
})(microsoftTeams || (microsoftTeams = {}));
