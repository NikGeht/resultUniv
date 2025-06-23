const range = [1016, 1937];
let max = 0;
for (let i = range[0]; i <= range[1]; i++) {
    if ((i % 3 === 0 && i % 7 === 0) && (i % 2 !== 0 && i % 5 !== 0)) {
        if (i > max) {
            max = i;
        }
    }
}

console.log(max);