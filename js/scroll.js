window.onload = function() {
  var scrolled;
  var timer;
  var scroll = document.getElementById('scroll')

  window.onscroll = function () {

    if (window.pageYOffset >= 600) {
        scroll.style.display = "block";
    }else{
      scroll.style.display = "none";
    }
  }

  scroll.onclick = function() {
    scrolled = window.pageYOffset;
    scrollToTop();
  }

  function scrollToTop() {

    if (scrolled >= 0) {
      window.scrollTo(0,scrolled);
      scrolled = scrolled - 50 // -50 length scroll
      timer = setTimeout(scrollToTop,20) // 20 scroll speed
    }else{
      clearTimeout(timer);
      window.scrollTo(0,0)
      }
    }
  }
