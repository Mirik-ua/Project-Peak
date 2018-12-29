// for button slider
var slide = document.querySelectorAll(".underHeadMenu .slides span");
var nextBtn = document.querySelector('.underHeadMenu .buttonsForClick #nextButton');
var backBtn = document.querySelector('.underHeadMenu .buttonsForClick #backButton');
var count = 0;

function back() {
  slide[count].className = "";
  count--;
  if (count < 0) {
    count = slide.length - 1;
  }
  slide[count].className = "showed";
}

function next() {
  slide[count].className = "";
  count++;
  if (count >= slide.length) {
    count = 0;
  }
  slide[count].className = "showed";
};

// for auto slider

var index = 0;
function show() {
 var i;
 var slides = document.querySelectorAll(".slides span");

 for(i = 0; i < slides.length; i++){
   slides[i].className = "";
 }

 index++;

 if (index > slides.length) {
   index = 1;
 }

 slides[index -1].className = "showed";
 setTimeout(show, 4000);
}
show();
