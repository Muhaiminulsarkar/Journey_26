/**
 * array has some duplicate elements
 * []
*/

const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];


function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

function valueDuplicate(array){
    const unique = [];
    let duplicate=[];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
        else{
            if(duplicate.includes(item) === false){
            duplicate.push(item);
        }
        }
    }
    return {
        unique:unique,
        duplicate:duplicate
    };
}

// const uniqueArray = noDuplicate(numbers);
const valueArray = valueDuplicate(numbers);
console.log('Unique Array : ' ,valueArray.unique);
console.log('Duplicate Array : ' ,valueArray.duplicate);
// console.log(uniqueArray);