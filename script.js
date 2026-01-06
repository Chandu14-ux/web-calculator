function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = "";
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression safely
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}