
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
price1 = 2.20;
price2 = 2.50;
var initTot = "Totale - 4.70&euro;";
document.getElementById("tot").innerHTML = initTot;

var slideIndex_b1 = 1;
// var labelIndex_b1 = 1;
showSlides_b1(slideIndex_b1);
// receipt_b1(labelIndex_b1);

function plusSlides_b1(n) {
  showSlides_b1(slideIndex_b1 += n);
  amount(price1, price2);
  return price1, price2;
}

function currentSlide_b1(n) {
  showSlides_b1(slideIndex_b1 = n); 
}

// function currentLabel_b1(n){
//   receipt_b1(labelIndex_b1 = n); 
// }



function showSlides_b1(n) {
drinkList = {"Espresso":2.2, "Aromatizzato":2.3, "Macchiato":2.4, "Affogato":2.5, 
          "Sormontato":2.6, "Corretto":2.7, "Espresso doppio":2.9, "Cappuccino":2.8, 
          "CaffeLatte":2.1, "Cioccolata calda":3.5, "Tea al limone":3.3, "Tisana alla menta":3.1}
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
  var current_drink = slides[slideIndex_b1-1].getAttribute('key');
  price1 = drinkList[current_drink];
  var row = current_drink + " - " + price1 + "0&euro;"
  document.getElementById("item1").innerHTML = row;
  return price1;
  // receipt_b1(n);
  //   dots[slideIndex_b1-1].className += " active";
}


var slideIndex_b2 = 1;
showSlides_b2(slideIndex_b2);

function plusSlides_b2(n) {
  showSlides_b2(slideIndex_b2 += n);
  amount(price1, price2);
  return price1, price2;
}

function currentSlide_b2(n) {
  showSlides_b2(slideIndex_b2 = n);
}

function showSlides_b2(n, price1) {
  sweetList = {"Croissant":2.5, "Sfoglie":2.8, "Waffles":3.7, "Crepes":4.5, 
          "Pancakes":4.9, "Flan":3.8, "Crostata":3.3, "Ciambella":4.4, 
          "Torta al cioccolato":3.4, "Biscotti":2.3, "Macaroon":2.6, "Cupcakes":3.2, "Brownies":3.6}
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
  var current_sweet = slides[slideIndex_b2-1].getAttribute('key');
  price2 = sweetList[current_sweet];
  var row = current_sweet + " - " + price2 + "0&euro;"
  document.getElementById("item2").innerHTML = row; 
  // var amount = price1 + price2;
  // document.getElementById("tot").innerHTML = amount; 
  return price2;
//   dots[slideIndex_b2-1].className += " active";

}
/* ATTENZIONE - la seguente funzione prende alternativamente UNA delle variabili in ingresso dalla 
funzione che la chiama e l'ALTRA variabile in ingresso dallo scope globale. Non solo. Restituisce
al chiamante entrabe le variabili aggiornate, affinché il chiamante le restituisca allo scope 
globale!! ATTENZIONE - La funzione amount() e le due funzioni chiamanti (plusSlide_b1 e plusSlide_b2)
sono pertanto delicatissime, e bisogna fare molta attenzione prima di toccare i valori in ingresso
o in uscita, che coinvolgono anche le funzioni showSlide_b1 e showSlide_b2. Queste ultime estrapolano 
i prezzi dai rispettivi Json e li passano aggiornati alle funzioni plusSlide_b1 e plusSlide_b2!!
CODICE MOLTO DELICATO!! FARE ATTENZIONE!!

POSTILLA - Potevo agire diversamente? Certo, si potevano leggere i valori dal DOM di volta in volta,
con una serie di getElement (a cui sarebbero seguiti metodi di manipolazione delle stringhe e calcolo) 
e innerHTML per risparare dentro il DOM il valore aggiornato.
Questa seconda mi sembra la strada più semplice sebbene idiota, ma non ho fatto realmente un tentativo,
ipoteticamente dovrebbe funzionare, perché prendere valori dal DOM e rispedirli dentro dopo il calcolo
è azione generalmente banale e riuscita*/

function amount(price1, price2){
  var totale = price1 + price2;
  var last_row = "Totale - " + totale.toFixed(1) + "0&euro;";
  document.getElementById("tot").innerHTML = last_row;
  return price1, price2;
  // totale.style.display = "block" 
}




// document.getElementById("fade-n1").addEventListener("wheel", myFunction);
// function myFunction() {
//   this.style.animationPlayState = "running";
// }

// function receipt_b1(n) {
// drinkList = {"Espresso":2.2, "Aromatizzato":2.3, "Macchiato":2.4, "Affogato":2.5, 
//           "Sormontato":2.6, "Corretto":2.7, "Espresso doppio":2.9, "Cappuccino":2.8, 
//           "CaffeLatte":2.1, "Cioccolata":3.5, "Tea al limone":3, "Tisana alla menta":3.1}
// var i;
// var label = document.getElementsByClassName("current_label_b1");
// if (n > label.length) {labelIndex_b1 = 1}    
// if (n < 1) {labelIndex_b1 = label.length}
// // for (i = 0; i < label.length; i++) {
// //   label[i].style.display = "none"; 
// //   }
// //   label[labelIndex_b1-1].style.display = "block";
//   var current = label[labelIndex_b1-1].getAttribute('key');
//   var price = drinkList[current];
//   var row = current + " - " + price + "0&euro;"
//   document.getElementById("item1").innerHTML = row;

// }

function openLog(){
  document.getElementById('login').style.display = "block";
  document.getElementById('signup').style.display = "none";
}

function openSign(){
  document.getElementById('signup').style.display = "block";
  document.getElementById('login').style.display = "none";
}


// Get the modal (loginForm)
var modal_log = document.getElementById('login');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event1) {
    if (event1.target == modal_log) {
        modal_log.style.display = "none";
    }
}

// Get the modal (signupForm)
var modal_sign = document.getElementById('signup');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event2) {
  if (event2.target == modal_sign) {
      modal_sign.style.display = "none";
  }
}

// Open and Close product's books
let book2 = document.querySelector('.book:nth-child(2)');

setTimeout( function() {
	book2.classList.add('open');
	
	setTimeout( function() {
		book2.classList.remove('open');
	}, 1500);
}, 500);


//Carousel showcase
function classToggle() {
  var window = document.querySelector('.window__content');
  window.classList.toggle('step-animation');
}

document.querySelector('#toggle').addEventListener('click', classToggle);