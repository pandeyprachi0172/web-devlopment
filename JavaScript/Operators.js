// Arithmetic operator

console.log(2 + 3);

console.log(5 ** 3); // Exponentiation (5 multiplied by itself 3 times)


// Assignment operator

let x = 20;

let y = 10;

// x = x + y;

// x = x - y;

// x = x * y;

x += y; // x = x + y, same meaning of both

console.log(x);


// Comparison operator

let p = 20;

let q = "20";

console.log(p > q);

console.log(p >= q);

console.log(p < q);

console.log(p <= q);

console.log(p == q);  // Checks only value

console.log(p === q); // Checks value and data type


// Convert string to number

let z = "10"; // Currently it is a string, we can convert this to a number like this: a = Number(z)

let a = Number(z);

console.log(a);

console.log(typeof a);


// Convert string containing letters to number

let s = "10ac";

let t = Number(s); // "10ac" cannot be completely converted into a number

console.log(t); // NaN

console.log(typeof t); // number


// Boolean values

let b = true;

console.log(Number(true));  // Boolean true

console.log(Number(false)); // Boolean false


// Convert null and undefined to number

console.log(Number(null));      // 0

console.log(Number(undefined)); // NaN