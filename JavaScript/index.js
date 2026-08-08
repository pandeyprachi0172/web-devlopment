// to write anthing in js use conle.log()
console.log("Strike is coming");

// Variable declaration

let name = "PRACHI";
let age = 20;

age = 30;

console.log(name, age);

const account = 1234;
// account = 23; // Not allowed because account is a const

console.log(account);

// DATA TYPES
// Primitive Data Types:
// Number, String, Boolean, Undefined, Null, BigInt, Symbol

// Number
let a = 10;
let b = 2.36;
console.log(a, b);

// String
let c = "Strike rate is coming";
let d = "Anjali";
console.log(c, d);

// Boolean
let login = true;
let f = false;
console.log(login, f);

// Undefined
// When a variable is declared but not assigned a value
let user;
console.log(user);

// BigInt
let num = 123456789n;
console.log(num);

// Null
// Example: Weather data is not available yet
let weather = null;
console.log(weather);
console.log(typeof weather);

// Symbol
const id1 = Symbol("id");
console.log(id1);

// Non-Primitive Data Types
// Array, Object, Function

// Array
let arr = [10, 20, "prachi", true];
console.log(arr);

// Object: Stores data in key-value pairs.
let obj = {
    name: "rohit",
    account: 1234,
    age: 18,
    category: "gen"
};

console.log(obj);

// Function
let s = function add() {
    console.log("hello");
};

s(); // Calling the function

console.log(typeof s); // function


// primitive data types are immutable: means at particular position value cannot be changed

let f1 = 10;
f1 = 20;

let str = "Rohit";
str = "Mohan";

console.log(str);


// Non-Primitive dATA type: they are mutable means at particular position we can change the value push 90

let arr2 = [10, 20, 30, 40];

arr2.push(90);
arr2[0] = 70;

console.log(arr2);

let obj2 = {
    name: "mohan",
    age: 20,
    class: 6
};

console.log(obj2);


