// ! a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumPositive = (arr) => {
  let sum = 0;
  for (let item of arr) {
    if (item > 0) {
      sum += item;
    }
  }
  return sum;
};

const arr = [2, -5, 10, -3, 7];

console.log(sumPositive(arr));
