// for button slider
var slider = document.querySelectorAll(".topPicture img");
var nextBtn = document.querySelector('.topPicture .switch #prevButton');
var backBtn = document.querySelector('.topPicture .switch #incomingButton');
var counter = 0;

function prev() {
  slider[counter].className = "";
  counter--;
  if (counter < 0) {
    counter = slider.length - 1;
  }
  slider[counter].className = "sliders";
}

function incoming() {
  slider[counter].className = "";
  counter++;
  if (counter >= slider.length) {
    counter = 0;
  }
  slider[counter].className = "sliders";
};


// for auto slider

var index = 0;
functionSlider();

function functionSlider() {
 var i;
 var slides = document.querySelectorAll(".topPicture img");

 for(i = 0; i < slides.length; i++){
   slides[i].className = "";
 }

 index++;

 if (index > slides.length) {
   index = 1;
 }

 slides[index -1].className = "sliders";
 setTimeout(functionSlider, 3000);
}
