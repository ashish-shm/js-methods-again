var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year

// your code goes here

let dogAge = (array) => {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i].type === "dog") {
      sum += array[i].age * 7;
    }
  }
  return sum;
}
dogAge(data);

// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
let dogAge = (array) => {
  let sum = 0;
  array.filter(data => ( data.type === "dog") && (sum += data.age * 7) );
  return sum;
}
dogAge(data);


// 2. map - to multiply human year to dog year

let dogAge = (array) => {
  let sum = 0;
  array.map(data => (data.type === "dog") ? sum += data.age * 7 : sum += 0);
  return sum;
}
dogAge(data);

// 3. reduce - to accumulate total age.
let dogAge = (array) => array.reduce( (acc, cv) => (cv.type === "dog") ? acc + (cv.age * 7) : acc, 0);
dogAge(data);
// Solution 105
