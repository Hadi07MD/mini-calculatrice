        // Variables
let a, b, total, operation;
let aStr, bStr;

        // Présentation
function onClickNumber(number) {
    if (aStr == undefined) {
            aStr = number
        
    } else {
        if (bStr == undefined) {
            bStr = number
        }
    }

    display()
}


function display(number) {
    let display = document.getElementById("display");
    display.value = "";
    if (a != undefined && b != undefined && operation != undefined) {

        display.value = number;
    } else {
        if (aStr != undefined)
            display.value += aStr
        if (operation != undefined)
            display.value += operation
        if (bStr != undefined)
            display.value += bStr
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
    a = parseFloat(aStr)
    b = parseFloat(bStr)
    total = calculer(a, b, operation)
    display(total)
}


function calculer(a, b, operation) {
    let _solution = undefined

    switch (operation) {
        case '+':
            _solution = a + b;
            break;
        case '-':
            _solution = a - b;
            break;
    }
    return _solution
}

function resetValues() {
    a = undefined;
    b = undefined;
    aStr = undefined;
    bStr = undefined;
    operation = undefined;
    let display = document.getElementById("display");
    
    display.value = "";
}