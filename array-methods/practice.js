// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics
// reduce
// etc ..

// Write atleast 10 different question for every method.

var pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];

var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];

var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];

//Map
// Last character is capital

function lastcharcap(arr){ 
  let newarr = arr.map(x => (x.substring(0,x.length-1) + x[x.length -1].toUpperCase())); 
  return newarr; 
  } 
  lastcharcap(cuts);

// Adding a symbol b/w each character

function addsymbol(arr,symbol){
  let newarr = arr.map(x => (x.split('').join(symbol)));
  return newarr;
}
addsymbol(cuts,'_');

// Add a str at particular pos
function addstr(arr,pos,str){
  let newarr = arr.map(x => (x.substring(0,pos) + str + x.substring(pos)));
  return newarr;
}
addstr(cuts,3,'YO');



//Remove a character at pos
function removechar(arr,pos){
  let newarr = arr.map(x => (x.substring(0,pos) + x.substring(pos+1)));
  return newarr;
}
removechar(cuts,3);


//Multiply a number to array
function multiply(arr, num){
  let newarr = arr.map(x => (x*num));
  return newarr;
}
multiply(numbers, 11);

//Return values along with their index
function valindex(arr){
let newarr = arr.map((x,i) => console.log( `Value is ${x} and Index is ${i}` ));
return newarr;
}
valindex(cuts);


//Filter

//Strings greater than length 5
function substr(arr){ 
let newarr = arr.filter(x => (x.length >5));
return newarr;

}
substr(cuts);

// Even
function even(arr){
  let newarr = arr.filter( x => (x%2 == 0));
  return newarr;

}
even(numbers);

//Remove element with space in it.

function remove(arr){
  let newarr = arr.filter( x => (x.split(''))).filter(y => (y != " "));
  return newarr.join('');
}
remove (cuts);

// Filters the array with consecutive letters in it  
function consecutiveletter(arr){
    let newarr = arr.filter(x => (x.includes('ii')));
    return newarr;
  }
  consecutiveletter(pizzas);

  //Filters the array with strings having space b/w them
  function addsymbol(arr, symbol){
    let newarr = arr.filter(x => (x.includes(" ")));
    return newarr[0].split(" ").join(symbol) + " " + newarr[1].split(" ").join(symbol);
  }

  addsymbol(pizzas,'#');

  //Check if array includes some substring
function includestr(arr , str){
  let newarr = arr.filter(x => (x.includes(str)));
  return newarr;
}
includestr(cuts ,'in');

//Check if strings contain any vowels

function includesvowels(arr , vowel){
  let vowels = ['a','e','i','o','u'];
  let newarr = arr.filter(x => (x.includes(vowels)));
  return newarr;
}
includesvowels(cuts , vowels);


//Return a new array divisible by 5
function divide(arr){
  let newarr = arr.filter(x =>(x % 5 == 0));
  return newarr;
}
divide(numbers);


//Reduce

// Return the sum of all elements
function sum(arr){
  let sum = arr.reduce( (acc, cv) => {
    return acc + cv
  }, 0)
  console.log(sum);
  }
  sum(numbers);

  // Return a unique array of distinct elements
  
    function distinct(arr){
    let uniqueArray = arr.reduce( (acc, cv) => { 
      ( acc.indexOf(cv) == -1) ? acc.push(cv) : acc;
      return acc;
    },[]);
    console.log(uniquieArray);
  }
    distinct(cuts);

  //  Remove duplicate numbers

  let removeDuplicateNums = nums => nums.reduce( (acc, cv) => {
    if(!acc.includes(cv)) {
      acc.push(cv);
    }
    return acc;
  } ,[])

  // Return maximum number 

  let maxNum = (nums) => num.reduce( (acc, cv) => {
    if(cv > acc) {
      acc = cv;
    } 
    return acc;
  },0)

  // Return longest string

  let shortestStr = arr => arr.reduce( (acc, cv) => {
    
    if(cv.length < acc.length) {
      acc = cv;
    } 
    
    return acc;
  },)



    //forEach
    
    // Display all the palindrom numbers.

let checkPalindrom = nums => nums.forEach(num => {
  num = num + "";
  
  if( num.length > 1 && num === num.split("").reverse().join("") ) {
    console.log(+num);
  }
  
})

//Display all the prime numbers 

let primeNums = num => num.forEach(n => {
  let flag = 1;
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i == 0) {
      flag = 0;
      break;
    }
  }
  if(flag) {
    console.log(n);
  }
})

//Write all the elements along with its index value

let list = arr => arr.forEach((el, i) => console.log(`${i} : ${el}`))

// Display all the pizza name which contains more than one words.

let pizzaName = pizzaList => pizzaList.forEach(el => {
  if(el.split(" ").length > 1) {
    console.log(el);
  }
})