const phones =[
    {name:"samsung", camera:12, storage:'128mpx', price:45000, color:"silver"},
    {name:"walton", camera:12, storage:'128mpx', price:25000, color:"silver"},
    {name:"symphony", camera:12, storage:'128mpx', price:30000, color:"silver"},
    {name:"realMe", camera:12, storage:'128mpx', price:35000, color:"silver"},
    {name:"OppO", camera:12, storage:'128mpx', price:35000, color:"silver"},
    {name:"iphone", camera:12, storage:'128mpx', price:85000, color:"silver"},
    {name:"nokia", camera:12, storage:'128mpx', price:45000, color:"silver"},
    {name:"htg", camera:12, storage:'128mpx', price:45000, color:"silver"}
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        
        const phone = phones[i];
        // console.log(phone);
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
