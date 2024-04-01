// Request a user’s name and display the response “Hello, [name]”.

const myName = prompt("What is your name?");

console.log(myName);

document.body.innerHTML = "<h1>Hello Mr. " + myName + "</h1>";

// Request a user’s year of birth, count his age, and display the result. Store the current year as a constant.

const currentYear = new Date().getFullYear();

const yearOfBirth = prompt("Please enter your year of birth:");

const yearOfBirthNumber = parseInt(yearOfBirth);

const userAge = currentYear - yearOfBirthNumber;

console.log("Your age is: " + userAge);

// Request a length of a side of a square from a user and display the perimeter of the square.

const sideLength = prompt("Please enter the length of a side of the square:");

const sideLengthNumber = parseFloat(sideLength);

const perimeter = 4 * sideLengthNumber;

console.log("The perimeter of the square is: " + perimeter);

// Request a radius of a circle and display the area of such a circle.

const radius = prompt("Please enter the radius of the circle:");

const radiusNumber = parseFloat(radius);

const pi = 3.14;

const circleArea = pi * radiusNumber * radiusNumber;

console.log("The area of the circle is: " + circleArea);

// Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.

const distance = prompt(
  "Please enter the distance between the two cities (in kilometers):"
);

const time = prompt(
  "Please enter the time you want to cover the distance within (in hours):"
);

const distanceNumber = parseFloat(distance);
const timeNumber = parseFloat(time);

const speed = distanceNumber / timeNumber;

console.log(
  "To cover the distance within " +
    time +
    " hours, you need to maintain a speed of " +
    speed +
    " kilometers per hour."
);

// Request user’s name, age, country of birth and display them in the console in different lines with different colors to be easily visible

const yourName = prompt("Please enter your name:");
const yourAge = prompt("Please enter your age:");
const countryOfBirth = prompt("Please enter your country of birth:");

// CSS styles for console
const yourNameStyle = "color: yellow;";
const yourAgeStyle = "color: pink;";
const countryStyle = "color: blue;";

console.log("%cName: %c" + yourName, yourNameStyle, "");
console.log("%cAge: %c" + yourAge, yourAgeStyle, "");
console.log("%cCountry of Birth: %c" + countryOfBirth, countryStyle, "");

// Ask 10 questions and display the answers in a short text in an alert

const question1 = prompt(
  "HTML Structure: What is the root element of an HTML document?"
);
const question2 = prompt(
  "HTML Elements: What HTML element is used to define a paragraph?"
);
const question3 = prompt(
  "CSS Selectors: How would you select all <p> elements with the class 'intro' in CSS?"
);
const question4 = prompt(
  "CSS Properties: What CSS property is used to change the font size of text?"
);
const question5 = prompt(
  "Box Model: What are the four parts of the CSS box model?"
);
const question6 = prompt(
  "HTML Attributes: What attribute is used to provide additional information about an element in HTML?"
);
const question7 = prompt(
  "CSS Positioning: How would you position an element absolutely within its containing element?"
);
const question8 = prompt(
  "HTML Links: What is the attribute used to specify the URL of the page the link goes to?"
);
const question9 = prompt(
  "CSS Flexbox: What CSS property is used to define flexible lengths and spacing between elements?"
);
const question10 = prompt(
  "HTML Forms: What HTML element is used to create a drop-down list?"
);

// Answers in an allert
const answers = `Answers:
1. ${question1} (<html>)
2. ${question2} (<p>)
3. ${question3} (p.intro)
4. ${question4} (font-size)
5. ${question5} (Content, padding, border, margin)
6. ${question6} (class)
7. ${question7} (position: absolute)
8. ${question8} (href)
9. ${question9} (flex)
10. ${question10} (select)`;

alert(answers);

// Show in the console what is going to be your age in 2025, 2029 and 2050, using a single variable

const birthYear = 2000;

const age2025 = 2025 - birthYear;
const age2029 = 2029 - birthYear;
const age2050 = 2050 - birthYear;

console.log("My age in 2025:", age2025);
console.log("My age in 2029:", age2029);
console.log("My age in 2050:", age2050);
