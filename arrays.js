// Create a “groceries list” array. Each element of the array is an object that contains the name of a product, an amount needed and whether it is bought or not. Write a few functions for working with this array.
// Display the entire list, so that the not yet purchased items go before the bought ones.

const groceriesList = [
  { name: "Cucumber", amount: 2, bought: true },
  { name: "Bread", amount: 1, bought: false },
  { name: "Eggs", amount: 10, bought: true },
  { name: "Bananas", amount: 5, bought: false },
];

// display the entire list with unpurchased items before purchased ones
function displayGroceriesList(list) {
  const sortedList = [...list].sort((a, b) =>
    a.bought === b.bought ? 0 : a.bought ? 1 : -1
  );
  sortedList.forEach((item) => {
    console.log(
      `${item.name}: ${item.amount} ${
        item.bought ? "(bought)" : "(not bought)"
      }`
    );
  });
}

console.log("Groceries List:");
displayGroceriesList(groceriesList);

// Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one.
// Purchasing a product. The function accepts the name of a product and marks it as bought.

// Function to add a purchase to the list
function addPurchase(name, amount) {
  const index = groceriesList.findIndex(
    (item) => item.name === name && !item.bought
  );
  if (index !== -1) {
    groceriesList[index].amount += amount;
  } else {
    groceriesList.push({ name, amount, bought: false });
  }
}

// mark a product as bought
function purchaseProduct(name) {
  const index = groceriesList.findIndex(
    (item) => item.name === name && !item.bought
  );
  if (index !== -1) {
    groceriesList[index].bought = true;
    console.log(`Purchased ${name}`);
  } else {
    console.log(`${name} is already bought or not in the list.`);
  }
}

addPurchase("Bananas", 3);
addPurchase("Apple", 1);
purchaseProduct("Bread");

console.log("\nAfter adding a purchase and purchasing:");
displayGroceriesList(groceriesList);

// Create an array that describes a shop receipt. Each element of the array consists of the name of the product, an amount bought, and price per item. Write the following functions.

// - Print the receipt out on the screen.
// - Counting the sum of the purchase.
// - Extracting the most expensive item on the receipt.
// - Counting an average item price on the receipt.

const shopReceipt = [
  { name: "Cucumber", amount: 3, pricePerItem: 1 },
  { name: "Bread", amount: 1, pricePerItem: 1.5 },
  { name: "Eggs", amount: 10, pricePerItem: 0.2 },
  { name: "Bananas", amount: 5, pricePerItem: 0.3 },
];

// print the receipt
function printReceipt(receipt) {
  console.log("Receipt:");
  receipt.forEach((item) => {
    console.log(
      `${item.name}: ${item.amount} x $${item.pricePerItem.toFixed(2)} = $${(
        item.amount * item.pricePerItem
      ).toFixed(2)}`
    );
  });
}

// Function to count the sum of the purchase
function countTotal(receipt) {
  return receipt.reduce(
    (total, item) => total + item.amount * item.pricePerItem,
    0
  );
}

// Function to extract the most expensive item on the receipt
function findMostExpensiveItem(receipt) {
  return receipt.reduce((maxItem, currentItem) =>
    currentItem.pricePerItem > maxItem.pricePerItem ? currentItem : maxItem
  );
}

// Function to count the average item price on the receipt
function calculateAveragePrice(receipt) {
  const totalAmount = receipt.reduce((total, item) => total + item.amount, 0);
  const totalPrice = receipt.reduce(
    (total, item) => total + item.amount * item.pricePerItem,
    0
  );
  return totalPrice / totalAmount;
}

printReceipt(shopReceipt);
console.log("\nTotal purchase amount: $" + countTotal(shopReceipt).toFixed(2));
console.log("Most expensive item:", findMostExpensiveItem(shopReceipt));
console.log(
  "Average item price: $" + calculateAveragePrice(shopReceipt).toFixed(2)
);
