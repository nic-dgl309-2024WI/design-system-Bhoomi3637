/*refrence from chat gpt */
function toggleNav() {
  var content = document.getElementById("content");
  var toggleButton = document.querySelector(".toggle");
  if (content.style.display === "block") {
    content.style.display = "none";
    toggleButton.classList.remove("active");
  } else {
    content.style.display = "block";
    toggleButton.classList.add("active");
  }
}



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("hero__slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var acc = document.getElementsByClassName("product__category--accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function showNav() {
  var element = document.getElementById("nav-items");
  element.classList.toggle("show-items");
}

let currentIndex = 0;

function moveCarousel(direction) {
  const productContainer = document.querySelector('.product_container');
  const productCards = document.querySelectorAll('.product_card');
  console.log('Product Container:', productContainer);
  console.log('Product Cards:', productCards);
  const cardWidth = productCards[0].offsetWidth;
  console.log('Card Width:', cardWidth);

  if (direction === -1 && currentIndex > 0) {
      currentIndex--;
  } else if (direction === 1 && currentIndex < productCards.length - 1) {
      currentIndex++;
  }

  productContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}