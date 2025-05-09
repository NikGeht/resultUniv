const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((number) => number + 0.5)
console.log(updatedPrices)
coffees.forEach((coffee, index) => {
    alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[index]} евро`)
})
