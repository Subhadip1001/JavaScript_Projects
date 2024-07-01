// Function to add a character to the display
function addToDisplay(character) {
    var display = document.getElementById("display");
    display.value += character;
  }
  // Function to clear the display
  function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
  }
  // Function to calculate the expression in the display
  function calculate() {
    var display = document.getElementById("display");
    var result = eval(display.value);
    display.value = result;
  }