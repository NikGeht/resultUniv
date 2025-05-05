let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    let element = numbers[i] ** 3;
    sum += element;
} 
console.log(sum); // 1158411

// Через цикл for of
sum = 0;
for (let num of numbers){
    console.log(numbers)
    let element = num ** 3;
    sum += element;
} 
console.log(sum); // 1003904306910622800