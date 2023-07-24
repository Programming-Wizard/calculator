const display = document.querySelector(".calc-display");
const currentNumber = "0";
function clear()
{
    display.innerHTML = currentNumber;
}

document.addEventListener("DOMContentLoaded", function() {
    const num1 = null;
    const num2 = null;
    const display = document.querySelector(".calc-display");
    let currentNumber = "0"; // Variable to store the current number being entered

  
    function updateDisplay() 
    {
      display.textContent = currentNumber;
      if (currentNumber.length>15)
      {
        display.textContent = currentNumber.substring(0,15);
      }
    }
  
    function handleButtonClick(buttonText) 
    {
      if (buttonText === "AC") 
      {
        currentNumber = "0";
      } 
      else if (buttonText === "=") 
      {

      } 
      else if (buttonText === "+") 
      {

      } 
      else if (buttonText === "=") 
      {
        
      } 
      else if (buttonText === ".") 
      {
        if (currentNumber.includes(".") === false) 
        {
          // Prevent multiple decimals in the same number
          currentNumber += buttonText;
        }
      } 
      else 
      {
        if (currentNumber === "0") 
        {
          currentNumber = buttonText; // If the current number is 0, replace it with the button's value
        } 
        else 
        {
          currentNumber += buttonText; // Otherwise, append the button's value to the current number
        }
      }
  
      updateDisplay(); // Update the display with the current number
    }
  
    const buttons = document.querySelectorAll("button");
  
    // Add event listeners for each button
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const buttonText = this.textContent;
        handleButtonClick(buttonText); // Call the function to handle the button click
        // alert(buttonText)
      });
    });
  });