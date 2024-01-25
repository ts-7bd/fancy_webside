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

// get current date and time and print it in the current-year element if available
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timeZoneName: "short",
};
const currentDateTime = new Date().toLocaleString("de-DE", options)
const yearElement = document.getElementById("current-date")
if (yearElement) yearElement.innerText = currentDateTime

// event listeners
document.addEventListener("DOMContentLoaded", function() {
    // get the author from the meta tag and modify the text printed in the footer
    const authorMeta = document.querySelector('meta[name="author"]');
    const authorName = authorMeta ? authorMeta["content"] : "unbekannt"
    const authorElement = document.getElementById("author");

    if (authorElement && authorMeta) {
        authorElement.innerText = `Erstellt von ${authorName}. All rights reserved`
    } else {
        authorElement.innerText = "Der Autor dieser Seite ist unbekannt."
    }
    
    // get burger-menu elements and modify styling of the list element (display: on/off)
    const menuButtonElement = document.getElementsByClassName("menu-button")[0];
    const menuLinksElement = document.getElementById("menuLinks")

    menuButtonElement.addEventListener("click", (event) => {
      if (menuLinksElement.style.display === "block") {
        menuLinksElement.style.display = "none";
      } else {
        menuLinksElement.style.display = "block";
      }
    });

    // klickzaehler: react on clicks on the buttons
    const addButton = document.getElementById("add");
    const mulButton = document.getElementById("mul");
    const resetButton = document.getElementById("reset");
    const counter = document.getElementById("counter");
    const clicks = document.getElementById("clicks");

    if (addButton && mulButton && resetButton) {
      // add one to counter and to clicks when add button is clicked
      addButton.addEventListener("click", (event) => {
        const number = parseInt(counter.innerText, 10) + 1;
        const numberClicks = parseInt(clicks.innerText, 10) + 1;
        counter.innerText = number;
        clicks.innerText = numberClicks
        if (parseInt(clicks.innerText) >= 5) {
          addButton.disabled = true;
          mulButton.disabled = true;
        }
      });

      // multiply counter with ten and one to to clicks when add button is clicked
      mulButton.addEventListener("click", (event) => {
        const number = parseInt(counter.innerText, 10) * 10;
        const numberClicks = parseInt(clicks.innerText, 10) + 1;
        counter.innerText = number;
        clicks.innerText = numberClicks

        if (parseInt(clicks.innerText) >= 5) {
          addButton.disabled = true;
          mulButton.disabled = true;
        }
      });
    
      // reset click and counter counts
      resetButton.addEventListener("click", () => {
        counter.innerText = "0";
        clicks.innerText = "0";
        addButton.disabled = false;
        mulButton.disabled = false;
      });
    
      // if mouse passes counts it is multiplied with itself
      counter.addEventListener("mouseenter", () => {
        let number = parseInt(counter.innerText, 10);
        number = number ** 2;
        counter.innerText = number.toString();
      });
    }
})