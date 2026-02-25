let numdisplay = document.getElementById('screen');

let buttons = document.querySelectorAll('button');

numdisplay.textContent = '0';

let firstnum = ""
let op = ""
let secnum = ""

buttons.forEach(function(btn) {
  btn.addEventListener('click', function(event) {
    console.log(event.target.dataset.type);
    console.log(event.target.textContent);
    if (event.target.dataset.type === "number") {
      if (numdisplay.textContent === "0"){
         numdisplay.textContent = event.target.textContent;
         } else {
        numdisplay.textContent = numdisplay.textContent + event.target.textContent;
      }
        if (op !== "") {
          if (secnum === "") {
            secnum = event.target.textContent
            } else {secnum = secnum + event.target.textContent}
          }
    }
    if (event.target.dataset.type === "function") {
      if (event.target.textContent === "AC") {
        numdisplay.textContent = "0"
        firstnum = ""
        secnum = ""
        op = ""
      }
    }
    if (event.target.dataset.type === "operator") {
      if (event.target.textContent === "=") {
        if (secnum !== "") {
         switch (op) {
          case "÷":
            numdisplay.textContent = parseFloat(firstnum) / parseFloat(secnum)
            break;
          case "−":
            numdisplay.textContent = parseFloat(firstnum) - parseFloat(secnum)
            break;
          case "×":
            numdisplay.textContent = parseFloat(firstnum) * parseFloat(secnum);
            break;
          case "+":
            numdisplay.textContent = parseFloat(firstnum) + parseFloat(secnum)
            break;
          }
            firstnum = numdisplay.textContent;
            secnum = ""
            op = ""
        }
       } 
      if (op !== "" && event.target.textContent !== "=") {
        numdisplay.textContent = firstnum + event.target.textContent
        } else {
          if (event.target.textContent !== "=") {
            firstnum = numdisplay.textContent;
      numdisplay.textContent = numdisplay.textContent + event.target.textContent;
                   
      op = event.target.textContent
             }
            }
    }
    
  })});
