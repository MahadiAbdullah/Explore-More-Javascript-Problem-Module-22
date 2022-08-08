



const phones = [
    {name: 'Samsung',cemara: 12, storage: '32gb',price: 36000, color:'silver' },
    {name: 'Weltone',cemara: 10, storage: '32gb',price: 22000, color:'silver' },
    {name: 'Iphone',cemara: 10, storage: '32gb',price: 82000, color:'silver' },
    {name: 'Xaomi',cemara: 10, storage: '32gb',price: 52000, color:'silver' },
    {name: 'Oppo',cemara: 10, storage: '32gb',price: 20000, color:'silver' },
    {name: 'Nokia',cemara: 10, storage: '32gb',price: 44000, color:'silver' },
    {name: 'HTC',cemara: 10, storage: '32gb',price: 62000, color:'silver' },
];
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);console.log(mySelection);