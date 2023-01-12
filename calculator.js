const output = document.querySelector('.output-value');
const buttons = document.querySelectorAll('button');
let operand1 = 0;
let operand2 = null;
let operator = null;

buttons.forEach(
    (button) => {
        button.addEventListener( 
            'click',
            (e) => {
                let value = e.target.value;
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
                    operand1 = parseFloat(output.innerText);
                    output.innerText = '';
                } else if (value === '.' && output.innerText.includes('.')) {
                    return;
                } else if (value === '=') {

                    operand2 = parseFloat(output.innerText);
                    output.innerText = calculate();
                } else {
                    output.innerText += value;
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