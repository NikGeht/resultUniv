console.log(isEqualSymbols('адрес', 'среда')) // true 
console.log(isEqualSymbols('ноутбук', 'программист')) // false 

function isEqualSymbols(str1, str2) { 
    const arr1 = str1.split('');
    const arr2 = str2.split('');
    return arr1.every(char => arr2.includes(char));
}
