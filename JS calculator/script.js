class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement =currentOperandTextElement
        this.clear()
    }
    clear(){
        this.currentOperand = ''
        this.previousOperand =''
        this.operation = undefined
  
    }
    delete(){

    }
    appendNumber(number){

    }
    chooseoperation(operation){

    }
    compute(){

    }
    updateDisplay(){

    }

}


const numberButton =document.querySelector('[data-number]')
const operationButton =document.querySelector('[data-operation]')
const equalsButton =document.querySelector('[data-equals]')
const deleteButton =document.querySelector('[data-delete]')
const allClearButton =document.querySelector('[data-all-clear]')
const previousOperandButton =document.querySelector('[data-previous-operand]')
const currentOperandButton =document.querySelector('[data-current-operand]')

const Calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)
numberButton.forEach(button => {
    button.addEventListener('click', () => {
        Calculator.appendNumber(button.innerText)
        Calculator.updateDisplay()
    });
});