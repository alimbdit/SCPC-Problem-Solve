// ! a JavaScript function to find the second smallest element in an array of numbers.

const secondSmallest = (arr) => {
  const sortArr = arr.sort((a, b) => a - b);
  return sortArr[1]
};

const arr = [2, 5, 3, 4, 7];
console.log(secondSmallest(arr));
