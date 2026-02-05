const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb', 
    monitor: true,
}


computer.color = 'white';
const values = Object.values(computer);
const values2 = Object.keys(computer);
// console.log(values,values2);
// console.log(values2.length);



for(const key in computer){
    console.log('key:', key ,'| type: ', typeof(computer[key]));
}