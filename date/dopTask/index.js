// dopTask 1
console.log(`dopTask1`)

const groceries = {
    "73Wakv": {
      name: "Orange Juice",
      price: 1.5,
      discount: 10
    },
    "5L3db9": {
      name: "Chocolate",
      price: 2,
      discount: 0
    }
    // more items...
  };

  function getTotalCost(price, discount, count) {
    let totalCost = (price * count) - (price * count) * discount / 100;

    return totalCost;
  }

  function getTotalPriceOfShoppingBag(shoppingArray) {
    const shopArray = shoppingArray.map((elem) => Object.values(elem))
    return shopArray.reduce((acc, elem) => {
        const id = elem[0];
        const count = elem[1];
        const discount = groceries[id].discount
        const price = groceries[id].price
        return acc += getTotalCost(price, discount, count)
    }, 0)
  }
  
  const shoppingBag = [
    { productId: "73Wakv", count: 3 },
    { productId: "5L3db9", count: 23 }
  ];
  
  const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
  console.log("totalPrice", totalPrice); // Возвращает 50.05
