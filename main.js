let currenttext = document.querySelector(".current-result");
let previoustext = document.querySelector(".previous-result");
currenttext.textContent = "";
previoustext.textContent ="";
function operate(number1, number2, op) {
    
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    if (op === "+") {
        return number1 + number2;
    } else if (op === "-") {
        return number1 - number2;
    } else if (op === "*") {
        return number1 * number2;
    } else if (op === "/") {
        return number1 / number2;
    }
}


let numbers = document.querySelectorAll(".num");
numbers.forEach(function(number){
    number.addEventListener("click",(e)=>{
        handleNumber(e.target.textContent);
           
        
    })
})

function handleNumber(number){
       
     if(currenttext.textContent.length<9){
        currenttext.textContent +=number;
            
    }
}

let operators = document.querySelectorAll(".operator");

let operator; 

operators.forEach(function (opButton) {
    opButton.addEventListener("click", () => {
        operator = opButton.textContent;
        previoustext.textContent = operator + " " + currenttext.textContent;
        currenttext.textContent = "";
    });
});

let equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    calculate();
});


 let reset = document.querySelector("#reset")
   reset.addEventListener("click",()=>{
    currenttext.textContent="";
    previoustext.textContent="";
    operator=""

   })

   let hasCalculated = false;

let deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", () => {
    if (!hasCalculated) {
        deleteLastDigit();
    }
});

function deleteLastDigit() {
    let currentTextContent = currenttext.textContent;
    currenttext.textContent = currentTextContent.slice(0, -1);
}

function calculate() {
    let nbr1 = previoustext.textContent.split(" ")[1];
    let nbr2 = currenttext.textContent;
    let oprt = operator;
    let result = operate(nbr1, nbr2, oprt);
    previoustext.textContent = "";
    currenttext.textContent = result;
    hasCalculated = true;
}

