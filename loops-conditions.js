// 1. Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.
function findSum(num) {
  let summation = 0;
  for (let i = 1; i <= num; i++) {
    summation += i;
  }
  return summation;
}

function main() {
  try {
    let num = parseInt(prompt("Enter a number: "));
    if (isNaN(num) || num < 0) {
      console.log("Please enter a positive number.");
    } else {
      let result = findSum(num);
      console.log(`The summation is: ${result}`);
    }
  } catch (error) {
    console.log("Invalid input. Please enter a valid number.");
  }
}

main();

// 2. Request two numbers and find only their largest common divisor with java script
function largestDevisor(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const number1 = parseInt(prompt("Enter the first number: "));
const number2 = parseInt(prompt("Enter the second number: "));

const result = largestDevisor(number1, number2);
console.log(
  `The largest common divisor of ${number1}
  and
  ${number2}
  is 
  ${result}`
);

// 3. Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.
function findDivisors(number) {
  const divisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

const inputNumber = parseInt(prompt("Enter a number: "));
const divisors = findDivisors(inputNumber);

console.log("The divisors of", inputNumber, "are:", divisors.join(", "));

// 4. Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.

function countDigits(number) {
  let absoluteNumber = Math.abs(number);

  let numberString = absoluteNumber.toString();

  let digitCount = numberString.length;

  return digitCount;
}

let userInput = prompt("Please enter a number:");

let userNumber = parseInt(userInput);

// Check if the input is a valid number
if (!isNaN(userNumber)) {
  // If the input is valid, calculate and display the number of digits
  let numberOfDigits = countDigits(userNumber);
  console.log(`The number of digits in, ${userNumber} is: ${numberOfDigits}`);
} else {
  // If the input is not a valid number, display an error message
  console.log("Invalid input. Please enter a valid number.");
}

// 5. Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user.

const totalNumbers = 10;

// Initialize counters
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let oddCount = 0;
let evenCount = 0;

// Function to check if a number is odd
function isOdd(num) {
  return num % 2 !== 0;
}

// Prompt the user to enter 10 numbers
for (let i = 0; i < totalNumbers; i++) {
  const number = parseInt(prompt(`Enter number ${i + 1}:`));

  if (number > 0) {
    positiveCount++;
  } else if (number < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }

  if (isOdd(number)) {
    oddCount++;
  } else {
    evenCount++;
  }
}

console.log(`Positive numbers: ${positiveCount}`);
console.log(`Negative numbers: ${negativeCount}`);
console.log(`Zeroes: ${zeroCount}`);
console.log(`Odd numbers: ${oddCount}`);
console.log(`Even numbers: ${evenCount}`);

// 6. Request favourite fruit from user. If it is Peach, Apple or Banana show message that it is your favourite food, if it is Pear or Grapefruit show message that you hate it otherwise show message that you have not tried this fruit

const favoriteFruit = prompt("What is your favorite fruit?").toLowerCase();

if (
  favoriteFruit === "peach" ||
  favoriteFruit === "apple" ||
  favoriteFruit === "banana"
) {
  console.log("That's your favorite fruit? Mine too! It's my favorite food!");
} else if (favoriteFruit === "pear" || favoriteFruit === "grapefruit") {
  console.log("Hmm, I'm not a fan of that one. I don't like it!");
} else {
  console.log(
    "I haven't tried that fruit before. Maybe I should give it a taste!"
  );
}

// 7. Request a number and check if the number is odd, even or zero. Use switch.

const number = parseInt(prompt("Enter a number:"));

switch (true) {
  case number === 0:
    console.log("The number is zero.");
    break;
  case number % 2 === 0:
    console.log("The number is even.");
    break;
  case number % 2 !== 0:
    console.log("The number is odd.");
    break;
  default:
    console.log("Invalid input.");
}

// CHALLENGES
// 1. Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and ask if the user wants one more. The loop continues until the user refuses.
let continueCalculating = true;

while (continueCalculating) {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const operator = prompt("Enter the operator (+, -, *, /):");

  let result;

  // Calculation
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        console.log("Error: Division by zero!");
        continue;
      }
      break;
    default:
      console.log("Invalid operator!");
      continue;
  }

  console.log(`Result: ${result}`);

  // Ask if the user wants to continue
  const response = prompt(
    "Do you want to calculate again? (yes/no)"
  ).toLowerCase();
  if (response !== "yes") {
    continueCalculating = false;
  }
}

console.log("Calculator closed.");

// 3. Loop day input like this: «Day of the week. Would you like to see the next one?» which continues as long as the user clicks OK.

let dayOfWeek = prompt("Enter the day of the week:");
let continueViewing = true;

while (continueViewing) {
  alert("You entered: " + dayOfWeek);
  continueViewing = confirm("Would you like to see the next one?");
  if (continueViewing) {
    // Calculate the index of the next day of the week
    const daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const currentIndex = daysOfWeek.indexOf(dayOfWeek);
    const nextIndex = (currentIndex + 1) % daysOfWeek.length;

    // Retrieve the next day of the week
    dayOfWeek = daysOfWeek[nextIndex];
  }
}

alert("End of program.");

// 4. Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10.

for (let i = 2; i <= 9; i++) {
  console.log(`Multiplication table for ${i}:`);

  // Loop through numbers from 1 to 10 for each number
  for (let j = 1; j <= 10; j++) {
    const result = i * j;
    console.log(`${i} * ${j} = ${result}`);
  }
}

