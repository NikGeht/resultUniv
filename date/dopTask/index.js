// Task 1
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

// Task 2
console.log(`dopTask2`)

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

const player = {
    name: '',
    health: 100,
    getHeat: function(){
        this.health = this.health - 10;
    }
};

// const hero = {
//     ...player,
//     name: 'Batman',
//     heatEnemy: function(enemy) {
//         enemy.health = enemy.health - 10;
//     }
// }

const hero = Object.create(player, 
    {
        name: {
            value: 'Batman'
        },
        heatEnemy: {
            value: function(enemy) {
                enemy.health -= 10;
            }
    }}
)
const enemy = Object.create(player, 
    {
        name: {
            value: 'Test'
        },
        heatHero: {
            value: function(hero) {
                hero.health -= 10;
            }
    }}
)

// const enemy = {
//     ...player,
//     name: 'Joker',
//     heatHero: function(hero) {
//         hero.health = hero.health - 10;
//     }
// }

function whosWinning(heroPlayer, enemyPlayer) {
    if(heroPlayer.health === 0) {
        return `${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья!`;
    } else {
        return `${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья!`;
    }
}

function startGame(heroPlayer, enemyPlayer) {
    while (heroPlayer.health !== 0 && enemyPlayer.health !== 0) {
        let whosAttacking = getRandomNumberInRange(0, 1)
        whosAttacking === 1 ? heroPlayer.getHeat() : enemyPlayer.getHeat()
        // whosAttacking === 1 ? enemyPlayer.heatHero(heroPlayer) : heroPlayer.heatEnemy(enemyPlayer)

        // Оставил для ТЗ, если мой вариант будет считаться неправильным. Посчитал, что излишне будет давать каждому, что он бьет кого-то, если они получают урон в принципе. и это можно сделать в родительском объекте (так скажем).
    }

    console.log(whosWinning(heroPlayer, enemyPlayer))

    
}

startGame(hero, enemy)

// Task 3
console.log(`dopTask3`)

function getKiller(suspectInfo, deadPeople) {
    const suspectInfoArray = Object.entries(suspectInfo)
    // let deadPeopleCount = suspectInfoArray.map((elem) => {
    //     return elem[1].reduce((acc, name) => {
    //         if (deadPeople.indexOf(name) !== -1) {
    //             return acc + 1
    //         } else {
    //             return acc
    //         }
    //     }, 0)
    // });

    // Более оптимизированный метод (по моему мнению)

    return suspectInfoArray.map(([name, seen]) => {
        return seen.filter(person => deadPeople.includes(person)).length === deadPeople.length ? name: null
    }).filter(val => (val))[0]

    // const idKiller =  deadPeopleCount.findIndex((value) => value === deadPeople.length)

    // return suspectInfoArray[idKiller][0]
}


console.log(
    getKiller(
      {
        James: ["Jacob", "Bill", "Lucas"],
        Johnny: ["David", "Kyle", "Lucas"],
        Peter: ["Lucy", "Kyle"]
      },
      ["Lucas", "Bill"]
    )
  ); // Убийца James
  
  console.log(
    getKiller(
      {
        Brad: [],
        Megan: ["Ben", "Kevin"],
        Finn: []
      },
      ["Ben"]
    )
  ); // Убийца Megan

// Task 4
console.log(`dopTask4`)

const todaysWinner = {
    prize: '10 000$',
 }
  
const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    },
}

function getWinner(winnerApplicants, todaysWinner) {
    const idPeople = Object.keys(winnerApplicants)
    const indexWinner = getRandomNumberInRange(0, idPeople.length - 1)
    
    const peopleWinner = winnerApplicants[idPeople[indexWinner]]

    return {
        ...todaysWinner,
        ...peopleWinner
    };
}


const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner); 
// { prize: '10 000$', name: 'Максим', age: 25 }

// Task 5

console.log(`dopTask5`)

const usersArray = [
    { id: '34rdca3eeb7f6fgeed471198', name: 'Andrew', age: 25 },
    { id: '76rdca3eeb7f6fgeed471100', name: 'Alexey', age: 15 },
    { id: '12rdca3eeb7f6fgeed4711012', name: 'Egor', age: 13 },
    { id: '32rdca3eeb7f6fgeed471101', name: 'Kate', age: 31 },
    { id: '98rdca3eeb7f6fgeed471102', name: 'Elena', age: 18 }
];
  
const usersObject = {
    '34rdca3eeb7f6fgeed471198': { 
    id: '34rdca3eeb7f6fgeed471198', 
    name: 'Andrew', 
    age: 25 
    },
    '76rdca3eeb7f6fgeed471100': { 
    id: '76rdca3eeb7f6fgeed471100', 
    name: 'Alexey', 
    age: 15 
    }, 
    '12rdca3eeb7f6fgeed4711012': { 
    id: '12rdca3eeb7f6fgeed4711012', 
    name: 'Egor', 
    age: 13 
    },
    '32rdca3eeb7f6fgeed471101': { 
    id: '32rdca3eeb7f6fgeed471101', 
    name: 'Kate', 
    age: 31 
    },
    '98rdca3eeb7f6fgeed471102': { 
    id: '98rdca3eeb7f6fgeed471102', 
    name: 'Elena', 
    age: 18 
    }
};

function getAdultUsers(users) {
    if (Array.isArray(users)) {
        return users.filter(person => person.age >= 18)
    } else {
        const keyUsers = Object.keys(users).filter(person => users[person].age >= 18)
        const adultUsers = {}
        for (let keyUser of keyUsers) {
            adultUsers[keyUser] = users[keyUser]
        }
        return adultUsers
        
    }
    
    
}
  
  console.log(getAdultUsers(usersArray));
/*
    [
        { id: '34rdca3eeb7f6fgeed471198', name: 'Andrew', age: 25 },
        { id: '32rdca3eeb7f6fgeed471101', name: 'Kate', age: 31 },
        { id: '98rdca3eeb7f6fgeed471102', name: 'Elena', age: 18 }
    ]
*/
console.log(usersObject)
console.log(getAdultUsers(usersObject));
/*
    {
        '34rdca3eeb7f6fgeed471198': { 
        id: '34rdca3eeb7f6fgeed471198', 
        name: 'Andrew', 
        age: 25 
    },
        '32rdca3eeb7f6fgeed471101': { 
        id: '32rdca3eeb7f6fgeed471101', 
        name: 'Kate', 
        age: 31 
    },
        '98rdca3eeb7f6fgeed471102': { 
        id: '98rdca3eeb7f6fgeed471102', 
        name: 'Elena', 
        age: 18 
    }
}
*/

// Task 6
console.log(`dopTask 6`)

const peopleWithVisa = [
  {
      firstName: 'Stasia',
      lastName: 'Ward',
      criminalRecord: true,
      passportExpiration: '19.06.2040',
  },
  {
      firstName: 'Elliot',
      lastName: 'Baker',
      criminalRecord: false,
      passportExpiration: '04.06.2041',
  },
  {
      firstName: 'Leighann',
      lastName: 'Scott',
      criminalRecord: true,
      passportExpiration: '31.07.2039',
  },
  {
      firstName: 'Nick',
      lastName: 'Pop',
      criminalRecord: false,
      passportExpiration: '31.12.2010',
  },
];

function allowVisa(people) {
    const currDate = Date.now()
    const peopleWithAllowVisa = people.filter((person) => {
        const [day, month, year] = person.passportExpiration.split('.')
        const passportExpirationDate = new Date(year, Number(month) - 1, day).getTime()
        if (passportExpirationDate - currDate < 0) {
            return false
        } else {
            return true
        }
    })
    
    return peopleWithAllowVisa
    
}
 
const result = allowVisa(peopleWithVisa);
console.log('result', result);

