// feet to inch

function feetToInch (inch){
   const feetFraction = inch / 12;
   const feetNumber = parseInt(feetFraction);
   const inchFraction = inch % 12 ;
   console.log(feetNumber, 'feet', inchFraction, 'inches');
}

// const height = feetToInch(74);


// ================================
// mile to kilo

function mileToKilo (mile){
    const kilo = mile * 1.60934;
    return kilo;
}

const kilometer = mileToKilo(5);
console.log(kilometer);