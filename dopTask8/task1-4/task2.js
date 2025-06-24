console.log(isEqualSymbols('адрес', 'среда')) // true
console.log(isEqualSymbols('ноутбук', 'программист')) // false 

function isEqualSymbols(str1, str2) { 
    const setStr1 = new Set(str1);
    const setStr2 = new Set(str2);
    
    if (setStr1.size !== setStr2.size) return false;
    return Array.from(setStr1).every(char => setStr2.has(char));
}
