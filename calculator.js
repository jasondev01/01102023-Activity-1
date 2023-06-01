const output = document.querySelector('.output-value');
const buttons = document.querySelectorAll('button');

let operation = [];
const operatorArray = ['+', '-', '*', '/'];

buttons.forEach(
    (button) => {
        button.addEventListener( 
            'click',
            (e) => {
                let value = e.target.value;
                let result;
                let operatorIndex;
                if (value === 'clear') {
                    output.innerText = '';
                    operand1 = '';
                    operand2 = '';
                    operator = undefined;
                } else if (value == 'delete') {
                    let string = output.innerText.toString();
                    output.innerText = string.slice(0, -1);
                } else if (value === '+' || value === '-' || value === 'x' || value === '/') {
                    operator = value;
                    for ( let value of operatorArray) {
                        const index = operation.indexOf(value)
                        if ( index == value) {
                            operatorIndex = index;
                            break;
                        }
                    }
                    let left = operation.slice(0, operatorIndex)
                    operand1 = parseFloat(left.join(''));
                    result = output.innerText += value;
                    operation.push(result);
                } else if (value === '.' && output.innerText.includes('.')) {
                    return;
                } else if (value === '=') {
                    const empty = output.innerText;
                    if (empty === '' ) {
                        return;
                    }
                    let right = operation.slice(operatorIndex +1)
                    operand2 = parseFloat(right.join(''));
                    result = output.innerText = calculate();
                    operation.push(result);
                } else {
                    result = output.innerText += value;
                    operation.push(result);
                }
            }
        );
    }
);

const calculate = () => {
    if (operator === '+') {
        return operand1 + operand2;
    } else if (operator === '-') {
        return operand1 - operand2;
    } else if (operator === 'x') {
        return operand1 * operand2;
    } else if (operator === '/') {
        if (operand2 === 0) {
            return "Cannot divide by zero";
        } else {
            return operand1 / operand2;
        }
    }
}
calculate();