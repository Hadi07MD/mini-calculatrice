const display = document.querySelector('.display');
var buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
    button.addEventListener('click', calculate)
});


function calculate(event) {
    const clickedButtonValue = event.target.value;
  
    if (clickedButtonValue === '=') {
      if (display.value !== '') {
        display.value = eval(display.value);
      }
    }  else {
      display.value += clickedButtonValue;
    }
  }