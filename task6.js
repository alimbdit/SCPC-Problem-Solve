// ! a javascript program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const randomPassword = (len) => {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "0123456789";
  const special = "!@#$%^&*()_-+=[]{}|;:,.<>?";

  const allCharacters = lowerCase + upperCase + number + special;
  let password = '';
  for(let i =0; i<len; i++){
    const randomIndex = Math.floor(Math.random()*allCharacters.length)
    password+=allCharacters[randomIndex];
  }
  return password;
};

const password = randomPassword(12);
console.log(password)
