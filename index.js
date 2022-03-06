// Import stylesheets
import "./style.css";

// Write Javascript code!
//const appDiv = document.getElementById('app');
//ppDiv.innerHTML = `<h1>JS Starter</h1>`;
//length of string
var lastNameLength = 0;
var lastName = "mayer";
lastNameLength = lastName.length;
console.log(lastNameLength);
var lasNamLgnth = 0;
var lasNam = "stg";
lasNamLgnth = lasNam.length;
console.log(lasNamLgnth);
//bracket notation
var lastLetter;
var name = "bibi";
var lastLetter = name[3];
console.log(lastLetter);

var laslttr;
var name1 = "Mamamaa";
laslttr = name1[0];
console.log(laslttr);

//bracket notation to find Last character in string
var lastName1 = "Mayer";
var lastLetter4 = lastName1[lastName1.length - 1];
console.log(lastLetter4);

var firstNamee = "herby";
var firstLettter2 = firstNamee[firstNamee.length - 2];
console.log(firstLettter2);

//wordblanks
function wordBlanks(myNoun, myAdjectives, myVerb, myAdverb) {
  var result;
  result +=
    "the" + " " + myAdjectives + " " + myNoun + " " + myVerb + " " + myAdverb;
  return result;
}
console.log(wordBlanks("nigga", "huge", "slipped", "quickly."));

//Array
var myArray = [50, 55, 56, 57, 58, 59];
myArray[2] = 88;
console.log(myArray);

var ketlyKids = [["Mayer", 23], [["Carla,20"]]];

var dArray = [
  [3, 4, 5],
  [5, 4, 3],
  [7, 8, 9, 10, 11],
  [8, 9, 0]
];
var lArray = dArray[2][4];
console.log(lArray);

var mArray = [
  [2, 4, 6],
  [0, 0, 0, 0],
  [4, 4, 8, 9],
  [0, 9, 8, 8]
];
var nArray = mArray[0][2];
console.log(nArray);

//Javascript book
//bolean data type!
var instock = true;
var shipping = false;
//some Js terms
/* Expressions
comments
operators
events
methods
integers
 */
//operators

var subTotal = (13 + 1) * 5;
var shipping = 0.5 * (13 + 1);
var total = subTotal + shipping;

var elSub = document.getElementById("subTotal");
var elShip = document.getElementById("shipping");
var elTotal = document.getElementById("total");
elTotal.textContent = total;
//functions
function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}
var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];

var area = function (width, height) {
  return width * height;
};
var size = area(4, 5);
console.log(size);

var area1 = (function () {
  var width1 = 2;
  var height1 = 8;
  return width1 * height1;
})();

/* function greeting(){
  var name =prompt("what is your name?");
  var result1 = "hello " + name;
  console.log(result1) 
}
greeting();
*/

//function with local var
function division() {
  var no1 = 64;
  var no2 = 8;
  return no1 / no2;
}
division();
console.log(division());
//objects
let man = {
  firstName: "bob",
  lastNama: "jean",
  age: 45,
  siblings: [
    ["stacy", 25],
    ["sassy", 21]
  ]
};
console.log(man);
