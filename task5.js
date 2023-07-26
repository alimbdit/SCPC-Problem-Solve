// ! a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
         return 0;
  }
};


const addition = calculator(5,2,'+');
console.log(addition);

const subtract = calculator(5,2,'-');
console.log(subtract);

const multiple = calculator(5,2,'*');
console.log(multiple);

const division = calculator(5,2,'/');
console.log(division);