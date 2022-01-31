// Variables
let firstNumber, secondNumber, total, operation;
let firstNumberStr, secondNumberStr;

// Présentation
function onClickNumber(number) {
    if (firstNumberStr == undefined) {
            firstNumberStr = number
        
    } else {
        if (secondNumberStr == undefined) {
            secondNumberStr = number
        }
    }

    display()
}


function display(number) {
    let display = document.getElementById("display");
    display.value = "";
    if (firstNumber != undefined && secondNumber != undefined && operation != undefined) {

        display.value = number;
    } else {
        if (firstNumberStr != undefined)
            display.value += firstNumberStr
        if (operation != undefined)
            display.value += operation
        if (secondNumberStr != undefined)
            display.value += secondNumberStr
    }


}

function operationHandle(OperationParm) {
    if (operation == undefined) {
        operation = OperationParm
        display()
    } else
        alert("Vous avez déjà choisi l'opération " + operation);
}

function equal() {
    firstNumber = parseFloat(firstNumberStr)
    secondNumber = parseFloat(secondNumberStr)
    total = calculer(firstNumber, secondNumber, operation)
    display(total)
}


function calculer(firstNumber, secondNumber, operation) {
    let _solution = undefined

    switch (operation) {
        case '+':
            _solution = firstNumber + secondNumber;
            break;
        case '-':
            _solution = firstNumber - secondNumber;
            break;
    }
    return _solution
}

function resetValues() {
    firstNumber = undefined;
    secondNumber = undefined;
    firstNumberStr = undefined;
    secondNumberStr = undefined;
    operation = undefined;
    let display = document.getElementById("display");
    
    display.value = "";
}