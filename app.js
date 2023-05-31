class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operation = undefined;
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) {
      return;
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  choseOperation(operation) {
    if (this.currentOperand === "") {
      return;
    }
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  updateDisplay() {
    this.previousOperandTextElement.innerText = this.previousOperand;
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
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

Array.from(operationButtons).forEach((button) => {
  button.addEventListener("click", () => {
    calculator.choseOperation(button.innerText);
    calculator.updateDisplay();
  });
});
