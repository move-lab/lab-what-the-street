var page = require("webpage").create();

page.viewportSize = { width: 512, height: 512 };

// Slow down the animation by 3x, since phantom can't render more than 10 fps
// while outputting the frames
var SLOW_DOWN_FACTOR = 3;
var animationDuration = 0;
var currentFrame = 0;
var stop = false;
var TARGET_FPS = 30;
var getFrameEvery = (1000 / TARGET_FPS) * SLOW_DOWN_FACTOR 

function getFrame() {
  page.render('frame/test_'+ currentFrame + '.png', { format: "png" });
  console.log(currentFrame);
  if (stop) {
    phantom.exit();
  }
  currentFrame++;
  
  // Get a new frame every ___ milliseconds
  setTimeout(getFrame, getFrameEvery);
}

page.onCallback = function(event){
    if(event.type === "readyToAnimate") {
      console.log(SLOW_DOWN_FACTOR);
      console.log('Ready To animate, start it, animation duration will be:');
      animationDuration = event.animationDuration * SLOW_DOWN_FACTOR;
      console.log(animationDuration);

      // Start the animation
      page.evaluate(function(slowDownFactor){
          // Trigger start animation
          window.renderAnimation(slowDownFactor);
      }, SLOW_DOWN_FACTOR);
      getFrame();

      // Stop getting Frame after animation finished
      setTimeout(function() {
        stop = true;
      }, animationDuration);
    }
};

page.open("http://localhost:4000/berlin/mapmobile/car/lanes/1645?bike=0.34&rail=0.32&car=0.33");
