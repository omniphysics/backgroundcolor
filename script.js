// Declare all variables

const button = document.querySelector("button"); // What we will click on
const body = document.querySelector("body"); // What will change
const colors = ["green", "purple", "orange", "coral", "brown", "red"];

button.addEventListener("click", clickButton);

body.style.backgroundColor = "green";

function clickButton() {
  // Return a random Index
  const colorIndex = Math.floor(Math.random() * colors.length); //Some people used parseInt instead of Math.floor

  // Return a random item
  colors[colorIndex];

  // Assign random item to document body to present random color
  body.style.backgroundColor = colors[colorIndex];
}
