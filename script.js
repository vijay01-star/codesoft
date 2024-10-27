// Select the display element
const display = document.getElementById("display");

// Append number to the display
function appendNumber(number) {
    if (display.innerText === "0") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

// Append operator to the display
function appendOperator(operator) {
    const lastChar = display.innerText[display.innerText.length - 1];
    if ("+-*/%".includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
}

// Clear the display
function clearDisplay() {
    display.innerText = "0";
}

// Delete the last character
function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}

// Calculate the result
function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = "Error";
    }
}
