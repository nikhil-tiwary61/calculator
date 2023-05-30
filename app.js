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

// const addBtn = document.getElementById("add-btn");
// const subtractBtn = document.getElementById("add-btn");
// const multiplyBtn = document.getElementById("add-btn");
// const divideBtn = document.getElementById("add-btn");

function calculator() {
  const buttons = document.querySelectorAll("button");
  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", displayCharacter(button));
  });
}
