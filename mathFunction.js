// Request a username and show a greeting using string template
const username = prompt("Please enter your username:");

console.log(`Hello, ${username}! Welcome to our platform.`);

// Request names and ages for two children. Check if child 1 is older and if its name is Tim
const nameChild1 = prompt("Please enter the name of the first child:");
const ageChild1 = parseInt(prompt("Please enter the age of the first child:"));

const nameChild2 = prompt("Please enter the name of the second child:");
const ageChild2 = parseInt(prompt("Please enter the age of the second child:"));

// Check if child 1 is older and if its name is Tim
if (ageChild1 > ageChild2 && ageChild1.toLowerCase() === "tim") {
  console.log(
    `${nameChild1} is older than ${nameChild2} and their name is Tim.`
  );
} else {
  console.log(
    `Either ${nameChild1} is not older than ${nameChild2} or their name is not Tim.`
  );
}

// Request a color and check if the color is on the flag of the Republic of South Africa
const colorsOnFlag = ["black", "red", "green", "gold", "white", "blue"];

const color = prompt("Please enter a color:");

if (colorsOnFlag.includes(color.toLowerCase())) {
  console.log(`Yes, ${color} is on the flag of the Republic of South Africa.`);
} else {
  console.log(
    `No, ${color} is not on the flag of the Republic of South Africa.`
  );
}

// Request a number and check if it is an odd number

const number = parseInt(prompt("Please enter a number:"));

if (number % 2 !== 0) {
  console.log(`${number} is an odd number.`);
} else {
  console.log(`${number} is not an odd number.`);
}

// Request two numbers, divide them and the result must be an integer(whole number)

const number1 = parseFloat(prompt("Please enter the first number:"));
const number2 = parseFloat(prompt("Please enter the second number:"));

const result = Math.floor(number1 / number2);

console.log(`The result of dividing ${number1} by ${number2} is ${result}.`);

// Request date of birth, calculate age and show if the person is over 18
const dateOfBirthString = prompt("Please enter your date of birth");

// Convert the date of birth string to a Date object
const dateOfBirth = new Date(dateOfBirthString);

const currentDate = new Date();

const age = currentDate.getFullYear() - dateOfBirth.getFullYear();

const isOver18 = age >= 18;

if (isOver18) {
  console.log("You are over 18 years old.");
} else {
  console.log("You are under 18 years old.");
}

// Declare a variable without initializing it and check if it is of type null or undefined

let myVariable;

if (myVariable === null) {
  console.log("The variable is null.");
} else if (myVariable === undefined) {
  console.log("The variable is undefined.");
} else {
  console.log("The variable has a value assigned to it.");
}

// Request a number, check if it is a number and if it is between 10 and 50
const userInput = prompt("Please enter a number:");

const yourNumber = parseFloat(userInput);

if (!isNaN(yourNumber) && yourNumber >= 10 && yourNumber <= 50) {
  console.log(
    `${yourNumber} is a valid number and falls within the range of 10 and 50.`
  );
} else {
  console.log(
    `${yourNumber} is either not a valid number or does not fall within the range of 10 and 50.`
  );
}
