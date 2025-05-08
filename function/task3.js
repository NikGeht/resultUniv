// function getDivisorsCount(number) {
//     let count = 0;
//     for (let i = 1; i <= number; i++) {
//         number % i === 0 ? count++ : count;
//     }
//     return count
// }


function highAndLow(numbers){
    let arrNumbers = Array.from(numbers).map(x => Number.isInteger(Number(x)) ? x : '')
    return `${Math.max(...arrNumbers)} ${Math.min(...arrNumbers)}`
  }

  highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
