/* ========================================================================
##  Task 1:
Write a JavaScript code to reverse the array colors without using the reverse method.
========================================================================*/
const colors = ['red', 'blue', 'green', 'yellow', 'orange']

let colors_rev = []
for(const color of colors){
    colors_rev.unshift(color);
}
// console.log(colors_rev);



/* ========================================================================
##  Task 2:
Write a JavaScript code to get the even numbers from an array using any looping technique.
========================================================================*/

const numbers1 = [12, 98, 5, 41, 23, 78, 46];

const numbers_even = [];
for (const number1 of numbers1){
    if(number1 % 2 === 0){
        numbers_even.push(number1)
    }
}
// console.log(numbers_even);




/* ========================================================================
##  Task 3:
Use a for...of loop to concatenate all the elements of an array into a single string.
========================================================================*/

const numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// const output = numbers.join("");
// console.log(output);

let names = '';

for(const number of numbers){
    names = names + number + " ";
}
names.trim()
// console.log(names);




/*======================================================================== 
##  Task 4:
Use a for...of loop to concatenate all the elements of an array into a single string.
========================================================================*/

const statement = 'I am a hard working person'

const states = statement.split(" ")
// console.log(states);

const rev_item = [];
for(const item of states){
    rev_item.unshift(item)
}
// console.log(rev_item.join(" "));





/* ====================================================================
##  Task 5:
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

Input: [1, 2, 3]

Expected Output:

Original: [1, 2, 3] Copy: [99, 2, 3]
========================================================================*/

const original = [1, 2, 3];

// shallow copy using slice
const copy = original.slice();

// change first element of copy
copy[0] = 99;

// console.log("Original:", original);
// console.log("Copy:", copy);



/* ====================================================================
##  Task 6:
Given an array of student objects, print each student’s name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
Expected ooutput:
John scored 85
Alice scored 90
========================================================================*/

const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]

for (const student of students){
    name_stu = student.name;
    marks_stu = student.marks
    // console.log(name_stu, 'scored', marks_stu);
}




/* ====================================================================
##  Task 7
Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:

[
  [1, 2],[3, 4],[5, 6]
]
Expected Array:

[
  [1, 2],[99, 4],[5, 6]
]
========================================================================*/

const array = [[1, 2],[3, 4],[5, 6]]

array[1][0] = 99;

console.log(array);