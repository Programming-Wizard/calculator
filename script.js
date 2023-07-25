document.addEventListener("DOMContentLoaded", function()
{
  const buttons = document.querySelectorAll("#numberkeys");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function() {
      button.style.backgroundColor = "lightblue";
    });

    button.addEventListener("mouseleave", function() {
      button.style.backgroundColor = "darkcyan";
    });
  });

  const opVbuttons = document.querySelectorAll("#operatorkeysV");
  opVbuttons.forEach((button) => {
    button.addEventListener("mouseenter", function() {
      button.style.backgroundColor = "lightblue";
    });

    button.addEventListener("mouseleave", function() {
      button.style.backgroundColor = "cornflowerblue";
    });
  });

  const opHbuttons = document.querySelectorAll("#operatorkeysH");
  opHbuttons.forEach((button) => {
    button.addEventListener("mouseenter", function() {
      button.style.backgroundColor = "lightblue";
    });

    button.addEventListener("mouseleave", function() {
      button.style.backgroundColor = "coral";
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
    let num1 = null;
    let num2 = null;
    let add = false;
    let sub = false;
    let mult = false;
    let divide = false;
    const display = document.querySelector(".calc-display");
    let currentNumber = "0";
    
    function clear()
    {
        currentNumber = "";
    }
  
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
        num2 = Math.floor(currentNumber)
        if(add)
        {
          currentNumber = num1 + num2;
        }
        else if(sub)
        {
          currentNumber = num1 - num2;
        }
        else if(mult)
        {
          currentNumber = num1 * num2;
        }
        else if(divide)
        {
          currentNumber = num1 / num2;
        }
      } 
      else if (buttonText === "+") 
      {
        num1  = Math.floor(currentNumber);
        add = true;
        sub = false;
        mult = false;
        divide = false;
        clear();
      } 
      else if (buttonText === "-") 
      {
        num1  = Math.floor(currentNumber);
        add = false;
        sub = true;
        mult = false;
        divide = false;
        clear();
      } 
      else if (buttonText === "*") 
      {
        num1  = Math.floor(currentNumber);
        add = false;
        sub = false;
        mult = true;
        divide = false;
        clear();
      } 
      else if (buttonText === "/") 
      {
        num1  = Math.floor(currentNumber);
        add = false;
        sub = false;
        mult = false;
        divide = true;
        clear();
      } 
      else if (buttonText === ".") 
      {
        if (currentNumber.includes(".") === false) 
        {
          currentNumber += buttonText;
        }
      } 
      else 
      {
        if (currentNumber === "0") 
        {
          currentNumber = buttonText;
        } 
        else 
        {
          currentNumber += buttonText;
        }
      }
      
      updateDisplay();
    }
  
    const buttons = document.querySelectorAll("button");
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const buttonText = this.textContent;
        handleButtonClick(buttonText);
        // alert(buttonText)
      });
    });
  });