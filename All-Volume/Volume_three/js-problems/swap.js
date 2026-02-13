let a = 5;
let b = 7;

console.log(a, b);
// a = b;
// b = a;

const temp = a;
a = b;
b = temp;
console.log(a, b);

// -----------------------
let x = 56; 
let y = 'f'; 

console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

// -----------------------
