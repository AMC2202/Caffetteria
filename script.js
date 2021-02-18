
//logica per lo scroll visibile da dispositivo mobile
function enter() {
    var menu = document.getElementById("menu-mob");
    var ham = document.getElementById("ham");
    if(menu.style.right == "0%") {
        menu.style.right = "-100%";
        ham.classList.toggle("change");
    }else {
        menu.style.right = "0%";
        ham.classList.toggle("change");
    }
}

//logica per lo slideshow visibile da desktop
var slideIndex_b1 = 1;
showSlides_b1(slideIndex_b1);

function plusSlides_b1(n) {
  showSlides_b1(slideIndex_b1 += n);
}

function currentSlide_b1(n) {
  showSlides_b1(slideIndex_b1 = n);
}

function showSlides_b1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_b1");
//   var dots = document.getElementsByClassName("dot_b1");
  if (n > slides.length) {slideIndex_b1 = 1}    
  if (n < 1) {slideIndex_b1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex_b1-1].style.display = "block";  
//   dots[slideIndex_b1-1].className += " active";
}

//Continua da qui, cambiando i nomi alle funzioni
var slideIndex_b2 = 1;
showSlides_b2(slideIndex_b2);

function plusSlides_b2(n) {
  showSlides_b2(slideIndex_b2 += n);
}

function currentSlide_b2(n) {
  showSlides_b2(slideIndex_b2 = n);
}

function showSlides_b2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_b2");
//   var dots = document.getElementsByClassName("dot_b2");
  if (n > slides.length) {slideIndex_b2 = 1}    
  if (n < 1) {slideIndex_b2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex_b2-1].style.display = "block";  
//   dots[slideIndex_b2-1].className += " active";
}


// document.getElementById("fade-n1").addEventListener("wheel", myFunction);
// function myFunction() {
//   this.style.animationPlayState = "running";
// }

