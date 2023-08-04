// Get the elements
var intro = document.querySelector(".intro");
var toggle = document.querySelector("#toggle-button");
var aside = document.querySelector("aside");
var emoji = document.querySelector(".emoji");

// Hide the aside initially
aside.style.display = "none";

// Add a click event listener to the toggle
toggle.addEventListener("click", function() {
  // Update the emoji content
  if (emoji.innerHTML === "😊") {
    emoji.innerHTML = "❎"; // Change the emoji when clicked
  } else {
    emoji.innerHTML = "😊"; // Change it back to the original emoji
  }

  // Toggle the visibility of the intro
  intro.style.display = intro.style.display === "none" ? "block" : "none";

  // Toggle the visibility of the aside
  aside.style.display = aside.style.display === "none" ? "block" : "none";
});
