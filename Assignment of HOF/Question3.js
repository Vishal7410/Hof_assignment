//3. Build a feature for Store's Inventory.
const Inventory = {
    item1 : 10,
    item2 : 20,
    item3 : 30,
    item4 : 40,
};

const usd = 80;
currancyExchange = Object.fromEntries(
    Object.entries(Inventory).map(([item,price])=>[item,price*usd])

);

console.log(currancyExchange);