// Create functions for operations
function addition (a, b) {
    return a + b;
}

function subtraction (a, b){
    return a - b;
}

function multiplication (a , b){
    return a * b;
}

function division (a, b){
    return a / b;
}

function operate (a, b, c){
    if (b === "x"){
        return multiplication(a,c)
    } else if (b === "/") {
        return division(a,c)
    } else if (b === "+") {
        return addition(a, c)
    }else {
        return subtraction(a,c)
    };
}

const updateScreen = () => {
    screenElement.innerText = '';
    let builtText = leftSideOfEquation ?? '';
    builtText = builtText + (operator ? operator : '');
    builtText = builtText + (rightSideOfEquation ? rightSideOfEquation : '');
    screenElement.innerText = builtText;
}
let leftSideOfEquation;
let operator;
let rightSideOfEquation;

let isOperatorSelected = () => operator ? true : false;

function appendValue (e) {
    if (!isOperatorSelected()){
        if (leftSideOfEquation) {
            leftSideOfEquation += e.srcElement.innerText;
            
            // update html
            updateScreen();
            
        } else {
            leftSideOfEquation = e.srcElement.innerText;
            // update html
            updateScreen();
        };
    } else {
        if (rightSideOfEquation) {
            rightSideOfEquation += e.srcElement.innerText;
            // update html
            updateScreen();
        } else {
            rightSideOfEquation = e.srcElement.innerText
            // update html
            updateScreen();
        }
    } 
}

function appendOpp (e) {
    operator = e.srcElement.innerText
    // update html
    console.log(operator)
    updateScreen();
}

const valued = document.querySelectorAll('.numbered')
valued.forEach(value => value.addEventListener('click', appendValue));

const terned = document.querySelectorAll('.operator')
terned.forEach(tern => tern.addEventListener('click', appendOpp));

const total = document.querySelector('.equals')
total.addEventListener('click', () =>{
    let ans = operate(Number(leftSideOfEquation),operator,Number(rightSideOfEquation))
    console.log(ans)
    leftSideOfEquation = Number(ans)
    rightSideOfEquation = null;
    operator = null;
    screenElement.innerText = ans;
})


const cleared = document.querySelector('.clear')
cleared.addEventListener('click', clearScreen);

function clearScreen () {
    leftSideOfEquation = null;
    operator = null;
    rightSideOfEquation = null;
    updateScreen();
}


const deleted = document.querySelector('.delete')
deleted.addEventListener('click', () => {
    if (!isOperatorSelected) {
        leftSideOfEquation = leftSideOfEquation.slice(0,-1)
        updateScreen();
    }else{
        rightSideOfEquation = rightSideOfEquation.slice(0, -1)
        updateScreen();
    }
})




const screenElement = document.querySelector('.screen');




