// Import stylesheets


// Write Javascript code!
//const appDiv = document.getElementById('app');
//ppDiv.innerHTML = `<h1>JS Starter</h1>`;
//length of string
var lastNameLength=0;
var lastName= 'mayer'
lastNameLength=lastName.length;
console.log(lastNameLength);
var lasNamLgnth =0;
var lasNam ="stg";
lasNamLgnth=lasNam.length;
console.log(lasNamLgnth);
//bracket notation
var lastLetter;
var name = "bibi";
var lastLetter= name[3];
console.log (lastLetter);

var laslttr;
var name1 ="Mamamaa";
laslttr=name1[0];
console.log(laslttr);


//bracket notation to find Last character in string
var lastName1 ="Mayer";
var lastLetter4= lastName1[lastName1.length-1];
console.log(lastLetter4);

var firstNamee ="herby";
var firstLettter2=firstNamee[firstNamee.length-2];
console.log(firstLettter2);

//wordblanks
function wordBlanks (myNoun,myAdjectives,myVerb,myAdverb){
  var result;
  result +="the"+" "+ myAdjectives + " " + myNoun +" "+ myVerb +" "+ myAdverb;
  return result;
}
console.log(wordBlanks("nigga","huge","slipped","quickly." ));

//Array
var myArray =[50,55,56,57,58,59];
myArray[2]=88;
console.log(myArray);

var ketlyKids=[["Mayer",23],[["Carla,20"]]];

var dArray =[[3,4,5],[5,4,3],[7,8,9,10,11],[8,9,0]];
var lArray =dArray[2][4];
console.log(lArray);

var mArray=[[2,4,6,],[0,0,0,0,],[4,4,8,9,],[0,9,8,8]];
var nArray=mArray[0][2];
console.log(nArray);


//Javascript book
//bolean data type!
var instock = true;
var shipping= false;
//some Js terms
/* Expressions
comments
operators
events
methods
 */
//operators

var subTotal =(13+1)*5;
var shipping =0.5*(13+1);
var total =subTotal+shipping;

var elSub =document.getElementById('subTotal');
var elShip=document.getElementById('shipping');
var elTotal=document.getElementById('total');
//elTotal.textContent=total;

var numn = 0;

/*while (numn < 100){
  numn += 1;
  console.log(numn)
}*/

// for loops
for (let num = 0; num <=50; num++){
  console.log(num);
}

let fruit = "banana";
let moreFruits = "banana\napple";

console.log(fruit.indexOf('b'));
console.log(fruit.slice(2, 5))
console.log(fruit.replace("nan", "non"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.split("")); //split by character
console.log(fruit.charAt(2));







