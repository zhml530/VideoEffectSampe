//=========== Following is partner's code ================
// This is the effect for processing
let appliedEffect = {
  pixelValue: 100,
  proportion: 2,
};

let faceModel;
let initFaceModelFlag=false;
let faceModelWarmup=false;
// This is the effect linked with UI
let uiSelectedEffect = {};

let errorOccurs = false;
//Sample video effect
function videoEffect(videoFrame, notifyVideoProcessed, notifyError) {
  if (!initFaceModelFlag){
    if (faceModel != undefined && faceModelWarmup){
      initFaceModelFlag = true

      const x1 = new Uint8ClampedArray(videoFrame.data, videoFrame.width * videoFrame.height * 4);

      var x3 = new ImageData(x1, videoFrame.width, videoFrame.height)
    
      faceModel.estimateFaces(x3);
    }
  }
  
  processAndSend(videoFrame, notifyVideoProcessed, notifyError);
  
}

async function processAndSend(videoFrame, notifyVideoProcessed, notifyError){
  
  await processImage(videoFrame, appliedEffect['effect'], appliedEffect['interactionMode'], faceModel)

  //send notification the effect processing is finshed.
  await notifyVideoProcessed();
  
  //send error to Teams
  if (errorOccurs) {
    await notifyError("some error message");
  }
}

function effectParameterChanged(effectName) {
  console.log(effectName);
  if (effectName === undefined) {
    // If effectName is undefined, then apply the effect selected in the UI
    appliedEffect = {
      ...appliedEffect,
      ...uiSelectedEffect,
    };
  } else {
    // if effectName is string sent from Teams client, the apply the effectName
    try {
      appliedEffect = {
        ...appliedEffect,
        ...JSON.parse(effectName),
      };
    } catch (e) {}
  }
}


tf.setBackend("webgl");




let videoApp = new microsoftTeams.VideoApp();
videoApp.registerForVideoEffect(effectParameterChanged);
videoApp.registerForVideoFrame(videoEffect);

// any changes to the UI should notify Teams client.
document.getElementById("enable_check").addEventListener("change", function () {
  if (this.checked) {
    videoApp.notifySelectedVideoEffectChanged("EffectChanged");
  } else {
    videoApp.notifySelectedVideoEffectChanged("EffectDisabled");
  }
});
document.getElementById("proportion").addEventListener("change", function () {
  uiSelectedEffect.proportion = this.value;
  videoApp.notifySelectedVideoEffectChanged("EffectChanged");
});
document.getElementById("pixel_value").addEventListener("change", function () {
  uiSelectedEffect.pixelValue = this.value;
  videoApp.notifySelectedVideoEffectChanged("EffectChanged");
});

// CC
document.getElementById("interactivemode_check").addEventListener("change", function () {
  if (this.checked) {
    uiSelectedEffect.interactionMode = true
  } else {
    uiSelectedEffect.interactionMode = false
  }
  videoApp.notifySelectedVideoEffectChanged("EffectChanged");
});

const radiosEffect = document.getElementsByName("effect");
radiosEffect.forEach((radio) => {
  radio.addEventListener("click", function () {
    uiSelectedEffect.effect = this.value;
    videoApp.notifySelectedVideoEffectChanged("EffectChanged");
  });
})

facemesh.load()
.then(
    (model)=>{
      
      faceModel = model;
            }
      )
  .then(
    ()=>{
      console.log('load model completed.')
      var testData = new Array(50 * 50 * 4).fill(0)
      var imageDataArray = new Uint8ClampedArray(testData, 0, 50 * 50 * 4);
      var testImageData = new ImageData(imageDataArray, 50, 50)
      faceModel.estimateFaces(testImageData);
    }
    )
    .then(
      ()=>{
        faceModelWarmup =true; 
        console.log('warm up completed.')
      }
    )


