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