
/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
*/

/**
 * 1. put odd numbers in an array
*/

function oddAverage(numbers) {
    let oddNumber=[];
    let oddSum = 0;
    for(const number of numbers){
        if(number % 2 === 1){   
            oddNumber.push(number);
            oddSum = oddSum + number;
        }
    }
   const oddAvg = oddSum / oddNumber.length;
   return oddAvg ;

}

const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is: ', avg);