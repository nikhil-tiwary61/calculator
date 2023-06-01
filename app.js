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

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
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

  compute() {
    let result;
    const previous = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(previous) || isNaN(current)) {
      return;
    }
    switch (this.operation) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "x":
        result = previous * current;
        break;
      case "/":
        result = previous / current;
        break;
      default:
        return;
    }
    this.currentOperand = result;
    this.previousOperand = "";
    this.operation = undefined;
  }

  updateDisplay() {
    this.operation !== undefined
      ? (this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`)
      : (this.previousOperandTextElement.innerText = "");
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const numberButtons = document.getElementsByClassName("operand");
const operationButtons = document.getElementsByClassName("operation");
const allClearButton = document.getElementById("all-clear-btn");
const deleteButton = document.getElementById("delete-btn");
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

equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
