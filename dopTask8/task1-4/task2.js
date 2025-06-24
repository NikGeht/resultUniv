console.log(isEqualSymbols('адрес', 'среда')) // true
console.log(isEqualSymbols('ноутбук', 'программист')) // false 

function isEqualSymbols(str1, str2) { 
    const setStr1 = new Set(str1);
    const setStr2 = new Set(str2);
    console.log(setStr1, setStr2);
    if (setStr1.size !== setStr2.size) {
        return false;
    } else {
        return setStr1.has(...setStr2);
    }
}
