// ! a function that takes a string as input and returns the reversed version of the string

const strReverse = (text) => {
  const reverseStrArray = [];
  const textArray = text.split("");
  for (let i = textArray.length - 1; i >= 0; i--) {
    reverseStrArray.push(textArray[i]);
  }
  const reverseStr = reverseStrArray.join("");
  return reverseStr;
};

const text = "hello world";

console.log(strReverse(text));
