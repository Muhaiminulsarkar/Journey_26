/* 
You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2

sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
*/

function repeated (numbers){
    let newArray = [];
    let repNumbers = [];
    for(const number of numbers){
        if(newArray.includes(number) === false){
            newArray.push(number);
        }
        else{
            repNumbers.push(number);
        }
    }
    console.log(newArray);
    console.log(repNumbers);
}

const numbers = [5,6,11,5,12,98,5];
repeated(numbers);

