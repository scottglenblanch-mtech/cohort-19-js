const equalButton = document.querySelector('.equalSign')

equalButton.addEventListener('click', function() {
    const solutionElement = document.querySelector('.solution')

    solutionElement.textContent = getSolution()
});

function getSolution() {
    const input1Element = document.querySelector('.input1')
    const input2Element = document.querySelector('.input2')
    const operatorElement = document.querySelector('.operator')

    const textFromInput1 = input1Element.value
    const textFromInput2 = input2Element.value
    const textFromOperator = operatorElement.value

    const num1 = Number.parseFloat(textFromInput1)
    const num2 =  Number.parseFloat(textFromInput2)

    return getMathSolution(num1, num2, textFromOperator)
}

function getMathSolution(num1, num2, operator) {

    if (isNaN(num1) || isNaN(num2)) {
        alert('both inputs need to be numbers')
        return ''
    } else if (operator === '+') {
        return num1 + num2
    } else if (operator === '-') {
        return num1 - num2
    } else if (operator === '*') {
        return num1 * num2
    } else if (operator === '/') {
        return num1 / num2
    } else if (operator === '%') {
        return num1 % num2
    } else {
        throw 'issue with math solution logic'
    }
}
