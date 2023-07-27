// ! a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const charToInt = (char) => {
  switch (char) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
};

const romanToInteger = (roman) => {
  const romanUpper = roman.toUpperCase();

  if (romanUpper === null) {
    return -1;
  }
  let number = charToInt(romanUpper.charAt(0));
  let previous, current;

  for (let i = 1; i < romanUpper.length; i++) {
    current = charToInt(romanUpper.charAt(i));
    previous = charToInt(romanUpper.charAt(i - 1));
    if (previous >= current) {
      number += current;
    } else {
      number = number - previous * 2 + current;
    }
  }
  return number;
};

// const romanNumber = 'MCC';
// const integer = romanToInteger(romanNumber);
// console.log(integer)


console.log(romanToInteger('XVI'));
console.log(romanToInteger('MCI'));