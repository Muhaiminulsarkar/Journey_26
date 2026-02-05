const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb', 
    monitor: 'hp'
}

const keys = Object.keys(computer);
console.log(keys);

for(const key of Object.keys(computer)){
    console.log(key,computer[key]);
}