// show button When the user scrolls down more than 20px from the top of the document
window.onscroll = () => {scrollFunction()};

const scrollFunction = () => {
  // get the button element
  const topButtonElement = document.getElementsByClassName("up-to-top-button")[0];

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButtonElement.style.display = "block";
  } else {
    topButtonElement.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, Edge and Opera
} 


// get current date
// const currentYear = new Date().getFullYear()
// const yearSpan = document.getElementById("currentYear")
// yearSpan.textContent = currentYear

document.addEventListener("DOMContentLoaded", function() {
    // get the author from the meta tag
    const authorMeta = document.querySelector('meta[name="author"]');
    const authorName = authorMeta ? authorMeta["content"] : "unbekannt"
    const authorElement = document.getElementById("author");

    if (authorElement && authorMeta) {
        authorElement.innerText = `Erstellt von ${authorName}. All rights reserved`
    } else {
        authorElement.innerText = "Der Autor dieser Seite ist unbekannt."
    }
    
    const menuButtonElement = document.getElementsByClassName("menu-button")[0];
    console.log(menuButtonElement)

    const menuLinksElement = document.getElementById("menuLinks")
    console.log(menuLinksElement)

    menuButtonElement.addEventListener("click", (event) => {
      if (menuLinksElement.style.display === "block") {
        menuLinksElement.style.display = "none";
      } else {
        menuLinksElement.style.display = "block";
      }
    });

})