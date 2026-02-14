const num1 = 256;
const num2 = 389;
const num3 = 168;

if (num1 > num2 && num1 > num3) {
    console.log('JIm is the ultimate boss')
}
else if (num2 > num1 && num2 > num3) {
    console.log('Tim is the boss')
}
else {
    console.log('Kim is the kardashians boss')
}



function maxOfThree (num1, num2, num3){
   if (num1 > num2 && num1 > num3) {
    return num1
}
    else if (num2 > num1 && num2 > num3) {
    return num2
}
else {
    return num3
}
}
const maxNum=maxOfThree(36,85,12);

console.log(maxNum);


const max = Math.max(12,1, 56, 5, 65, 8, 1, 99, 2);
console.log('max isuing Math.max', max)