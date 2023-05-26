function addNumber(number) {
    result.value += number;
}

function addOperator(operator) {
    result.value += ' ' + operator + ' ';
}

function clearResult() {
    result.value = '';
}

function calculate() {
    let calculation;
    try {
        calculation = math.evaluate(result.value);
        result.value = calculation;
    } catch {
        result.value = 'Erreur';
    }
}

let result = document.getElementById('result');