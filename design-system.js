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


const productContainers = [...document.querySelectorAll('.product_contanier')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

window.addEventListener('resize', () => {
    const isMobile = window.innerWidth <= 768; // Check if the window width is less than or equal to 768px
  
    productContainers.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;
  
      if (isMobile) {
        // If mobile, adjust the container width based on the window width
        containerWidth = window.innerWidth - 10; // Adjusted padding
      }
  
      nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
      });
  
      preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
      });
    });
  });