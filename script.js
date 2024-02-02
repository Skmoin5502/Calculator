
let currentInput = '';
let currentOperator = '';
let storedValue = '';

function appendNumber(number) {
    currentInput += number;
    updateResult();
}

function setOperator(operator) {
    if (currentInput !== '') {
        currentOperator = operator;
        storedValue = currentInput;
        currentInput = '';
        updateResult();
    }
}

function clearInput() {
    currentInput = '';
    updateResult();
}

function calculate() {
    if (currentOperator && storedValue && currentInput !== '') {
        const num1 = parseFloat(storedValue);
        const num2 = parseFloat(currentInput);

        switch (currentOperator) {
            case '+':
                currentInput = num1 + num2;
                break;
            case '-':
                currentInput = num1 - num2;
                break;
            case '*':
                currentInput = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    currentInput = num1 / num2;
                } else {
                    currentInput = 'Error';
                }
                break;
            default:
                break;
        }

        currentOperator = '';
        storedValue = '';
        updateResult();
    }
}

function updateResult() {
    document.getElementById('result').value = currentInput;
}
