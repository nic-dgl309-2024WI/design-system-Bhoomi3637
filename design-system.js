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