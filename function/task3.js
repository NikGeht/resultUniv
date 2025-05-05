// function getDivisorsCount(number) {
//     let count = 0;
//     for (let i = 1; i <= number; i++) {
//         number % i === 0 ? count++ : count;
//     }
//     return count
// }


let getDivisorsCount = (number) => {
    if (isNaN(number) || (typeof(number) !== 'number')) {
        return NaN
    }
    if (number < 0 || !Number.isInteger(number)) {
        alert(`${number} должен быть целым числом и больше нуля!`)
    }
    let countDivisors = 0
    for (let i = 1; i <= number; i++) {
        number % i === 0 ? countDivisors++ : countDivisors
    }
    return countDivisors
}


console.log(getDivisorsCount(30))