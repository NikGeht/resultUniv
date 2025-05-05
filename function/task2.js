function getSumOfNumber(number, type='odd') {
    let sum = 0;
    if (isNaN(Number(number)) || typeof(number) !== 'number') {
        return NaN;
    }
    for (let i = 0; i <= number; i++) {
        if ((type ==='odd' && i % 2 === 1) || (type === 'even' && i % 2 === 0) || (type ==='')) {
            sum += i
        }
    }
    return sum
}

console.log(getSumOfNumber(3, ''))
console.log(getSumOfNumber(3, 'odd'))
console.log(getSumOfNumber(3, 'even'))