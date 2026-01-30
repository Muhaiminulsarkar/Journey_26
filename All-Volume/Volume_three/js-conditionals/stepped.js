/**
 * MULTI_LEVEL CONDITION
*/

const price = 7000;

if (price >= 5000) {
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (price > 2500) {
    // 5% discount
    const discount = price * 5 / 100;
    const payAmount = price -discount;
    console.log(payAmount)
}
else {
    console.log(price);
}


const price2 = 1500;

if(price2 >= 3000){
    console.log('You will get 10% Discount');
    const discount2 = price2 * 10 / 100;
    const haveToPay = price2-discount2;
    console.log('You Have to Pay = ',haveToPay);
}
else if (price2 < 3000 && price2 >= 2000) {
    console.log('You will get 5% Discount');
    const discount2 = price2 * 5 / 100;
    const haveToPay = price2-discount2;
    console.log('You Have to Pay = ',haveToPay);
}
else {
    console.log('Sorry You dont get any Discount');
    console.log('You Have to Pay =', price2);
}