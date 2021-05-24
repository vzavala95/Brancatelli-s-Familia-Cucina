// I got the idea from the code from https://codepen.io/gabrieleromanato/pen/dImly as well as https://www.w3schools.com/howto/howto_js_slideshow.asp

document.addEventListener("DOMContentLoaded", () => {
  var slides = document.getElementsByClassName("autoscroll-each");
  var lengthScroll = slides.length;
  var widthScroll = slides[0].clientWidth;
  var dot = document.getElementsByClassName("scroll_dots");
  var backwards = document.getElementById("backwards");
  var forwards = document.getElementById("forwards");
  var val = 0; 

  // https://codepen.io/gabrieleromanato/pen/dImly
  var scrollLeft = () => {
      var offset = (val + 1) * widthScroll;
      for (var slide of slides) {
          slide.style.left = `-${offset}px`;
      }
      dot[val].className = "scroll_dots";
      dot[val + 1].className += " on"
      val++;
  }
  // https://codepen.io/gabrieleromanato/pen/dImly
  var scrollRight = () => {
      dot[val].className = "scroll_dots";
      if (val == 0) {
          val = lengthScroll - 1;
      } else {
          val--;
      }
      var offset = val * widthScroll;
      for (var slide of slides) {
          slide.style.left = `-${offset}px`;
      }

      dot[val].className += " on"
  }
  // https://www.w3schools.com/howto/howto_js_slideshow.asp
  var reposition = () => {
      for (var slide of slides) {
          slide.style.left = "0px";
      }
      dot[0].classList = "scroll_dots on";
      dot[val].className = "scroll_dots";
      val = 0;
  }
  // https://www.w3schools.com/howto/howto_js_slideshow.asp
  var autoScroll = () => {
      if (val < lengthScroll - 1) {
          scrollLeft();
      } else {
          reposition();
      }
  }

  // https://www.w3schools.com/howto/howto_js_slideshow.asp
  var move = setInterval(autoScroll, 2000); 
  carousel.addEventListener("mouseenter", () => clearInterval(move));
  carousel.addEventListener("mouseleave", () => {
      move = setInterval(autoScroll, 2000);
  });

  backwards.addEventListener("click", () => {
      scrollRight();
  });
  forwards.addEventListener("click", () => {
     if (val < lengthScroll - 1 ) {
          scrollLeft();
     } else {
         reposition();
     }
  })

})
