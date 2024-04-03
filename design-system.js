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

function copyToClipboard() {
  // Get the text from the pre element
  const textToCopy = document.getElementById("codeSnippet").innerText;
  
  // Use the Clipboard API to copy the text
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Code copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy text: ", err);
  });
}


