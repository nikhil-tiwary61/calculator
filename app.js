class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }

  appendNumber(number) {}

  updateDisplay() {}
}

const numberButtons = document.getElementsByClassName("operand");
const operationButtons = document.getElementsByClassName("operation");
const allClearButton = document.getElementById("all-clear-btn");
const deleteButton = document.getElementById("delete-btn");
const decimalButton = document.getElementById("decimal-btn");
const equalsButton = document.getElementById("equals-btn");
const previousOperandTextElement = document.getElementById("previous-operand");
const currentOperandTextElement = document.getElementById("current-operand");

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

Array.from(numberButtons).forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

const addNumber = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};
const subtractNumber = (firstNumber, secondNumber) => {
  return firstNumber - secondNumber;
};
const multiplyNumber = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
};
const divideNumber = (firstNumber, secondNumber) => {
  return firstNumber / secondNumber;
};

const displayCharacter = (button) => {
  const displayExpression = document.getElementById("display");
  console.log(displayExpression);
};
