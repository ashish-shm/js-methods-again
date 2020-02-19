var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(words){
  let long = 0;
  let longest;

  for(let i=0 ; i < words.length ; i++){
    if(words[i].length > long){
    long = words[i].length;
    longest = words[i];
    }
   }
   console.log(longest);
}
findLongestWord(words);


var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.

var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

let sum = (numArr) => numArr.reduce( (acc, cv) => acc + cv, 0 );
let avg = sum(numbers1) / numbers1.length;


var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers



let avg2 = (numArr) => numArr.reduce( (acc, cv) => acc + cv, 0 ) / numArr.length;
console.log(avg2(numbers2));


var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(array){
  let sum = 0;
  for ( let i = 0 ; i < array.length ; i++){
    sum = sum + array[i].length;
  }
  let averageLength = (sum/array.length);
  return averageLength;
}
averageWordLength(words2);
