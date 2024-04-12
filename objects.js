// Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:
// -method that displays the car info
// -method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.

const Car = {
  manufacturer: "",
  model: "",
  yearOfRelease: "",
  averageSpeed: 0,

  setCarInfo(manufacturer, model, yearOfRelease, averageSpeed) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.yearOfRelease = yearOfRelease;
    this.averageSpeed = averageSpeed;
  },

  displayCarInfo() {
    console.log(`Manufacturer: ${this.manufacturer}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year of Release: ${this.yearOfRelease}`);
    console.log(`Average Speed: ${this.averageSpeed} km/h`);
  },

  timeToCoverDistance(distance) {
    const totalTime = distance / this.averageSpeed;
    const breaks = Math.floor(totalTime / 4); // Calculate number of breaks needed
    const totalBreakTime = breaks; // One-hour break after every 4 hours
    const timeWithoutBreaks = totalTime - totalBreakTime;
    return timeWithoutBreaks + breaks; // Adding breaks time
  },
};
Car.setCarInfo("BMW", "X5", 2024, 60);
Car.displayCarInfo();
console.log(`Time to cover 300 km: ${Car.timeToCoverDistance(300)} hours`);

// Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:
const Fraction = {
  numerator: 0,
  denominator: 1,

  setFraction(numerator, denominator) {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero");
    }
    this.numerator = numerator;
    this.denominator = denominator;
    this.simplify(); // Simplify fraction after setting numerator and denominator
  },

  // -A function for adding two fraction objects.
  add(otherFraction) {
    const resultNumerator =
      this.numerator * otherFraction.denominator +
      otherFraction.numerator * this.denominator;
    const resultDenominator = this.denominator * otherFraction.denominator;
    return Fraction.create(resultNumerator, resultDenominator);
  },

  // -A function for subtracting two fraction objects.
  subtract(otherFraction) {
    const resultNumerator =
      this.numerator * otherFraction.denominator -
      otherFraction.numerator * this.denominator;
    const resultDenominator = this.denominator * otherFraction.denominator;
    return Fraction.create(resultNumerator, resultDenominator);
  },

  // -A function for multiplying two fraction objects.
  multiply(otherFraction) {
    const resultNumerator = this.numerator * otherFraction.numerator;
    const resultDenominator = this.denominator * otherFraction.denominator;
    return Fraction.create(resultNumerator, resultDenominator);
  },

  // -A function for dividing two fraction objects.
  divide(otherFraction) {
    if (otherFraction.numerator === 0) {
      throw new Error("Cannot divide by zero");
    }
    const resultNumerator = this.numerator * otherFraction.denominator;
    const resultDenominator = this.denominator * otherFraction.numerator;
    return Fraction.create(resultNumerator, resultDenominator);
  },

  // -A function for simplifying a fraction objects
  simplify() {
    const greatestCommonDivisor = this.greatestCommonDivisor(
      this.numerator,
      this.denominator
    );
    this.numerator /= greatestCommonDivisor;
    this.denominator /= greatestCommonDivisor;
  },

  greatestCommonDivisor(a, b) {
    return b === 0 ? a : this.greatestCommonDivisor(b, a % b);
  },

  create(numerator, denominator) {
    const newFraction = Object.create(Fraction);
    newFraction.setFraction(numerator, denominator);
    return newFraction;
  },
};

// Example:
const fraction1 = Fraction.create(3, 4);
const fraction2 = Fraction.create(1, 2);

console.log("Fraction 1:", fraction1.numerator + "/" + fraction1.denominator);
console.log("Fraction 2:", fraction2.numerator + "/" + fraction2.denominator);

const additionResult = fraction1.add(fraction2);
console.log(
  "Addition Result:",
  additionResult.numerator + "/" + additionResult.denominator
);

const subtractionResult = fraction1.subtract(fraction2);
console.log(
  "Subtraction Result:",
  subtractionResult.numerator + "/" + subtractionResult.denominator
);

const multiplicationResult = fraction1.multiply(fraction2);
console.log(
  "Multiplication Result:",
  multiplicationResult.numerator + "/" + multiplicationResult.denominator
);

const divisionResult = fraction1.divide(fraction2);
console.log(
  "Division Result:",
  divisionResult.numerator + "/" + divisionResult.denominator
);

// Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object:

// A method for changing the time by a given amount of hours.
// Note that in the last three methods changing one part may influence another. For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75».

const Time = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  setTime(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.normalizeTime(); // Check if time is in a valid format
  },

  // method for displaying the time
  displayTime() {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  },

  // method for changing the time by a given amount of seconds.
  changeSeconds(amount) {
    this.seconds += amount;
    this.normalizeTime();
  },

  // method for changing the time by a given amount of minutes
  changeMinutes(amount) {
    this.minutes += amount;
    this.normalizeTime();
  },

  // A method for changing the time by a given amount of hours.
  changeHours(amount) {
    this.hours += amount;
    this.normalizeTime();
  },

  normalizeTime() {
    let carry = 0;

    while (this.seconds >= 60) {
      this.seconds -= 60;
      carry++;
    }

    this.minutes += carry;
    carry = 0;
    while (this.minutes >= 60) {
      this.minutes -= 60;
      carry++;
    }

    this.hours += carry;
    this.hours %= 24; // Ensure hours are within 0-23 range
  },
};

Time.setTime(10, 38, 20);
console.log("Current Time:", Time.displayTime());

Time.changeSeconds(10);
console.log("Time after adding 30 seconds:", Time.displayTime());

Time.changeMinutes(12);
console.log("Time after adding 15 minutes:", Time.displayTime());

Time.changeHours(14);
console.log("Time after adding 3 hours:", Time.displayTime());

// Create 5 dogs - John, Ivan, Teddy, Rocco and Sparky. All of them should have unique ids, ages and addresses. Show which is the oldest and which is the youngest.

function Dog(id, name, age, address) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.address = address;
}

// Create five dog objects
const John = new Dog(1, "John", 2, "Müllerstraße 10-11");
const Ivan = new Dog(2, "Ivan", 4, "Bugenhagenstraße 14");
const Teddy = new Dog(3, "Teddy", 9, "Akazienstraße 3a");
const Rocco = new Dog(4, "Rocco", 4, "Mehringdamn 2");
const Sparky = new Dog(5, "Sparky", 5, "Marienburger Str. 16");

// Store the dogs in an array
const dogs = [John, Ivan, Teddy, Rocco, Sparky];

// the oldest dog
let oldestDog = dogs[0];
dogs.forEach((dog) => {
  if (dog.age > oldestDog.age) {
    oldestDog = dog;
  }
});

// the youngest dog
let youngestDog = dogs[0];
dogs.forEach((dog) => {
  if (dog.age < youngestDog.age) {
    youngestDog = dog;
  }
});

console.log(
  `The oldest dog is ${oldestDog.name} who is ${oldestDog.age} years old.`
);
console.log(
  `The youngest dog is ${youngestDog.name} who is ${youngestDog.age} years old.`
);

// Use the previous objects and show a list with their names and ages
console.log("List of Dogs:");
console.log(`Name: ${John.name}, Age: ${John.age}`);
console.log(`Name: ${Ivan.name}, Age: ${Ivan.age}`);
console.log(`Name: ${Teddy.name}, Age: ${Teddy.age}`);
console.log(`Name: ${Rocco.name}, Age: ${Rocco.age}`);
console.log(`Name: ${Sparky.name}, Age: ${Sparky.age}`);

// Create 2 people - Joye and Rachel. They have to have age and a greeting which will say “Hi, my name is  <NAME> and I am <AGE> old. Nice to meet you!”
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `Hi, my name is ${this.name} and I am ${this.age} years old. Nice to meet you!`;
  };
}

// two person objects
const Joye = new Person("Joye", 33);
const Rachel = new Person("Rachel", 28);

console.log(Joye.greet());
console.log(Rachel.greet());

// Create an object circle with a property radius and a method calculateArea. The calculateArea method should calculate and return the area of the circle using the formula: area = π * radius^2. Now, create another object smallCircle with its own radius, and use the bind method to bind the calculateArea method from circle to smallCircle. Call the calculateArea method on smallCircle and print the area.
const circle = {
  radius: 0,
  calculateArea: function () {
    return Math.PI * this.radius ** 2;
  },
};

const smallCircle = {
  radius: 2,
};

const calculateAreaSmallCircle = circle.calculateArea.bind(smallCircle);

console.log("Area of smallCircle:", calculateAreaSmallCircle());

// Create an object with properties. These properties cannot be deleted
const obj = {};

// Define a property with configurable set to false
Object.defineProperty(obj, "name", {
  value: "Inna",
  configurable: false,
});

delete obj.name;

console.log("name" in obj);

// Create an object with properties. These properties cannot be changed

// Define a property with writable set to false
Object.defineProperty(obj, "age", {
  value: 24,
  writable: false,
});

obj.age = 40;

console.log(obj.age);
