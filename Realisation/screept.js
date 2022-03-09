// Variables
let x, y, operation;
let xString, yString;

function Calculate(x, y, operation) {
    let _total = undefined;
    switch (operation) {
        case '+':
            _total = x + y;
            break;
        case '-':
            _total = x - y;
            break;
        case '/':
            _total = x / y;
            break;
        case '*':
            _total = x * y;
            break;
        default:
            alert("Please enter numbers and oprations")
            break;
    }
    return _total;
}

function SelectNumber(number) {
    if (x == undefined) {
        if (xString == undefined)
            xString = '';
        xString += number;
    }
    else {
        if (yString == undefined) 
            yString = '';
        yString += number;
    }

    Display();
}

function Display(number) {

    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";

    if (x != undefined && y != undefined && operation != undefined) {
        afficheur.value = number;
    }
    else {
        if (xString != undefined)
            afficheur.value += xString
        if (operation != undefined)
            afficheur.value += operation
        if (yString != undefined)
            afficheur.value += yString
    }
}


function Operation(operationParam) {
    if (operation == undefined) {
        operation = operationParam;
        x = parseFloat(xString);
        Display();
    } else {
        alert("Une operation existent déjà! " + operation);
    }
}

function equal() {
    x = parseFloat(xString);
    y = parseFloat(yString);
    solution = Calculate(x, y, operation);
    Display(solution);
}

function Rest() {
    x = undefined;
    y = undefined;
    xString = undefined;
    yString = undefined;
    operation = undefined;
    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";
}