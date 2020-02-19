// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
let large = 0;
let largest;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > large) {
    large = numbers[i].length;
    largest = numbers[i];
  }
}
console.log(largest);

// Find longest string in strings
var strings = ["this", "is", "a", "collection", "of", "words"];

let long = 0;
let longest;

for (let i = 0; i < strings.length; i++) {
  if (strings[i].length > long) {
    var long = strings[i].length;
    longest = strings[i];
  }
}

console.log(longest);

// Find all the even numbers
function evenNumber(numbers) {
  let even = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 1) {
      even.push(numbers[i]);
      console.log(even);
    }
  }
}
evenNumber(numbers);

// Find all the odd numbers
function oddNumber(numbers) {
  let odd = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
      odd.push(numbers[i]);
      console.log(odd);
    }
  }
}
oddNumber(numbers);

// Find all the words that contain 'is' use string method 'includes'

let includesIs = strings.filter(el => el.includes("is"));

// Find all the words that contain 'is' use string method 'indexOf'

let indexOfIs = strings.filter(el => el.indexOf("is") !== -1);

// Check if all the numbers in numbers array are divisible by three use array method (every)

//  Sort Array from smallest to largest

let sortedNumbers = nums => nums.sort( (a, b) => a - b );

console.log(sortedNumbers(numbers));

// Remove the last word in strings

let removeLast = strings.slice(0,-1);

// Add a new word in the array

strings.push("newword");

// Remove the first word in the array

strings.shift();

// Place a new word at the start of the array use (unshift)
var
strings.unshift("newword");

// Make a subset of numbers array [18,9,7,11]

let subsetNum = numbers.slice(3, 7);

// Make a subset of strings array ['a','collection']

let subsetStr = strings.slice(2, 4);

// Replace 12 & 18 with 1221 and 1881

let replaceNumbers = numbers.map(el => (el===18 ) ? 1881 : el === 12 ? 1221 : el);

// Replace words with string in strings array

let replaceWords = strings.map(el => el==="words" ? "string" : el);

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'

let nameStartWithS = customers.filter(el => el.firstname.startsWith("J"));

// Create new array with firstname and lastname

let nameArr = customers.map(el => el.firstname + " " + el.lastname);

// Sort the array created above alphabetically

nameArr.sort();