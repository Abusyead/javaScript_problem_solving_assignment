
//01. Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo"

//02. On one single line, declare three variables with the following names and values:

let [fristName , lastName ,age] = ["John" , "Doe" , 35]; 

// So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
// 3rd Variable Name And Values Both! 

// let fristName = "John"; 
// let lastName = "lastName"; 
// let age = 35 ;

// 03.Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y). 

// let x = 10;
// let y = 5;
// x = x *  y;

// console.log(x);

//04 Use comments to describe the correct data type of the following variables:

// let length = typeof 16;
// console.log(length);

// let lastName = "Johnson";
// console.log(typeof lastName);


// const x = {
//   firstName: "John",  
//   lastName: "Doe"
// }; 
// console.log(typeof x);


// 05 Execute the function named myFunction.
 
function myFunction() {
 alert("Hello World!");
}

myFunction()// call the function and see the output 

// 06. Create an object called person with name = John, age = 50, Then,
// access the object to alert("John is 50").

let person = {name:'john' , age:50}

alert(person.name +" is " + person.age)



// 07.The <button> element should do something when someone clicks on it. Try to fix it!

//<button>Click me.</button> 

function click_btn(){
    alert('hello sir, how are you?')
}

// 08. Array Related Question

// 1. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length)


// 2. Change the first item of Brand to "Ford".

const brand = ["Volvo", "Jeep", "Mercedes"];

brand[0] = "Ford"
console.log(brand);

// 09 Math Related Problems


// 1. Use the correct Math method to create a random number.

let randomNum = Math.random()
console.log(randomNum);


// 2. Use the correct Math method to return the largest number of 10 and 20.

const largestNum = Math.max(10, 20); 
console.log(largestNum);


// 3. Use the correct Math method to get the square root of 9.

const rootMath = Math.sqrt(9);

console.log(rootMath);


// 10.comparison operator related problems! 

 
// 1. Choose the correct comparison operator to alert true, when x is greater than y. 

let x =10;
let y = 5;

let z = x > y;
alert(z)





// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let age1 = 17;

const mess = (age1 < 18)? 'too young' : "Old enough"
alert(mess)