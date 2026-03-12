
function add7() {

    let num = document.getElementById("numVal").value;
   
   let numPara = document.getElementById("numPara");
    numPara.textContent = Number(num) + 7;
}

function multiply(a, b){
    let multi = a * b;
    return multi;
}

console.log("the multiply function is functioning")
console.log(multiply(2, 3));

function capitalize(){
    let textCont = document.getElementById("textVal").value; 
    let result = textCont.charAt(0).toUpperCase() + textCont.slice(1).toLowerCase();
    
    let textResult = document.getElementById("textR");
    textResult.textContent = result;
}

function lastletter() {
  lastLetter= document.getElementById("lastLetInput").value;
  let resultL = lastLetter.charAt(lastLetter.length - 1);

  let lastResult = document.getElementById("lastR");
  lastResult.textContent = resultL;

  
}