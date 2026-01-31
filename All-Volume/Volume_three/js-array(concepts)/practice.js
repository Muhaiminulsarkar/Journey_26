
/*
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
*/
const fruits = ["apple","mango","banana","orange","grape"]


const thirdIndex= fruits[2];
// console.log(thirdIndex);

fruits[1]= "jambura"
// console.log(fruits);


// ===========================================
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output


const places = ["coxs-bazar","bandarban","sundarban"]

places.push("jaflong");
// console.log(places);

places.push("lalbag","saint-martin");
// console.log(places);

places.pop();
// console.log(places);


// ===========================================
// Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.

const books = ["physics","maths","python","english"]

const checking = books.includes('javascript');
// console.log(checking);

if(checking){
    // console.log("the javascript books is present here");
}
else{
    // console.log("the javascript books is not present here");
}



// ===========================================
// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.

const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];
const nums = [];
const food = 'ros o gol l a';
const age = 15;

console.log(Array.isArray(friends)? "This is an array" : "This is NOT an array");
console.log(Array.isArray(nums));
console.log(Array.isArray(food));
console.log(Array.isArray(age));