// leftOperand, operator, rightOperand
//      1           +           2

const output = document.querySelector('.output-value');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector('.clear');
const del = document.querySelector('.del');

const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');

const operation = [];
const operatorsArr = [ '+', '-', 'x', '÷' ];


addToDisplay = (e) => {
    operation.push(e.target.value)
    output.innerText += e.target.value
}

decimal.addEventListener( 'click', addToDisplay );
numbers.forEach( number => { number.addEventListener( 'click', addToDisplay )} )

operators.forEach( 
    operator => {
        operator.addEventListener( 
            'click', 
            (e) => {
                let operatorIndex;
                for( let operator of operatorsArr ) {
                    const index = operation.indexOf(operator); // returns -1 if false
                    if ( index > -1 ) {
                        operatorIndex = index;
                        break;
                    }
                }
                if (operation.includes(operation[operatorIndex])) {
                    return;
                } else {
                    operation.push(e.target.value)
                    output.innerText += e.target.value
                }
            }
        )
    } 
)

clear.addEventListener( 
    'click', 
    () => {
        output.innerText = '';
        operation.length = 0;
    }
)

del.addEventListener(
    'click',
    () => {
        let number = output.innerText; 
        if ( !number ) {
            return;
        } else {
            let newNumber = parseFloat(number.slice(0, -1));
            if ( isNaN(newNumber) ) {
                newNumber = '';
            }
            output.innerText = newNumber; 
            operation.length = 0;
            operation.push(newNumber);
        }
    }
)

equals.addEventListener(
    'click',
    () => {
        let operatorIndex;
        let result;

        for( let operator of operatorsArr ) {
            const index = operation.indexOf(operator); // returns -1 if false
            if ( index > -1 ) {
                operatorIndex = index;
                break;
            }
        }
        // [ 4, 5, 1, +, 9, 9, 9 ] = operatorIndex = 3
        // leftNumber = 451, rightNumber = 999
        const left = operation.slice(0, operatorIndex); // from index[0] to index[operatorIndex] = [ 4,5,1 ]
        const right = operation.slice(operatorIndex + 1); // from operatorIndex (3+1=4 so index[4]) = [ 9,9,9 ]
        const leftNumber = parseFloat( left.join('') ); // left.join returns string hence the parseFloat
        const rightNumber = parseFloat( right.join('') ); // ('') separator is important if not it will have comma
        const operator = operation[operatorIndex]; // get the operator = (-)

        if ( !left.length|| !right.length|| !operator ) {
            return;
        } else {
            switch( operator ) {
                case '+': 
                    result = leftNumber + rightNumber
                    break;
                case '-':
                    result = leftNumber - rightNumber
                    break;
                case 'x':
                    result = leftNumber * rightNumber
                    break;
                case '÷':
                    result = leftNumber / rightNumber
                    break;
            }
            output.innerText = result;
            operation.length = 0;
            operation.push(result);
        } 
        
    }
)