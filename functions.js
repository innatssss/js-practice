// 1. Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.

function compareNumbers(num1, num2) {
  if (num1 < num2) {
    return -1;
  } else if (num1 > num2) {
    return 1;
  } else {
    return 0;
  }
}

console.log(compareNumbers(3, 10));
console.log(compareNumbers(10, 3));
console.log(compareNumbers(3, 3));

// 2. Write a function that counts the factorial of a given number.

function factorial(n) {
  let result = 1;
  // Multiply result by numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// 3. Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.

function combineDigits(digit1, digit2, digit3) {
  return digit1 * 100 + digit2 * 10 + digit3;
}

const combinedNumber = combineDigits(1, 4, 9);
console.log(combinedNumber);

// 4. Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square.

function calculateArea(width, length = null) {
  if (length === null) {
    // If only one parameter is given, assume it's the side of a square
    return width * width;
  } else {
    return width * length;
  }
}

console.log(calculateArea(5));
console.log(calculateArea(4, 6));

// 5. Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.

function isPerfectNumber(number) {
  let sum = 0;

  // all possible divisors of the number
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  // if the sum of divisors equals the original number
  return sum === number;
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(15));

// 6. Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. Use the previous function to check, if numbers are perfect.
// 7. Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.
// 8. Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
// 9. Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
// 10. Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.
