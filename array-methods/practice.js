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


function lastcharcap(arr){ 
  let newarr = arr.map(x => (x.substring(0,x.length-1) + x[x.length -1].toUpperCase())); 
  return newarr; 
  } 
  lastcharcap(cuts);

function addsymbol(arr,symbol){
  let newarr = arr.map(x => (x.split('').join(symbol)));
  return newarr;
}
addsymbol(cuts,'_');

function addstr(arr,pos,str){
  let newarr = arr.map(x => (x.substring(0,pos) + str + x.substring(pos)));
  return newarr;
}
addstr(cuts,3,'YO');

function removechar(arr,pos){
  let newarr = arr.map(x => (x.substring(0,pos) + x.substring(pos+1)));
  return newarr;
}
removechar(cuts,3);

function multiply(arr, num){
  let newarr = arr.map(x => (x*num));
  return newarr;
}
multiply(numbers, 11);

//Filter
function substr(arr){ 
let newarr = arr.filter(x => (x.length >5));
return newarr;

}
substr(cuts);

function even(arr){
  let newarr = arr.filter( x => (x%2 == 0));
  return newarr;

}
even(numbers);

Remove element with space in it.

function remove(arr){
  let newarr = arr.filter( x => (x.split(''))).filter(y => (y != " "));
  return newarr.join('');
}
remove (cuts);

  function consecutiveletter(arr){
    let newarr = arr.filter(x => (x.includes('ii')));
    return newarr;
  }
  consecutiveletter(pizzas);

  function addsymbol(arr, symbol){
    let newarr = arr.filter(x => (x.includes(" ")));
    return newarr[0].split(" ").join(symbol) + " " + newarr[1].split(" ").join(symbol);
  }

  addsymbol(pizzas,'#');