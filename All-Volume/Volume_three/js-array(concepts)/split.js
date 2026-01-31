const arr = ['P','A','R','O','S','H']

const joinArr = arr.join("-");
const joinPlus = arr.join("+");
console.log(joinPlus);

const arrSplit = joinPlus.split('+');
console.log(arrSplit);


// join() আর split() প্রায় সব জায়গায় string–array convert করার কাজে লাগে।