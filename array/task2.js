function getSumOfSequence(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        console.log(`${number} не является числом`);
        return;
    }
    let arr = [];
    for (i = 1; i <= number; i++) {
        arr.push(i)
    }

    return arr[0] + arr[arr.length - 1]
}

console.log(getSumOfSequence(5))