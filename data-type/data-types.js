const num = 10;
const str = "string";
const boolean = false;
const obj = {
    key: num }

const nll = null;
let indef;
const symbol = Symbol("id")
const bigInt = 100n;

console.log('num', num, typeof(num))
console.log('str', str, typeof(str))
console.log('boolean', boolean, typeof(boolean))
console.log('object', obj, typeof(obj))
console.log('undef', indef, typeof(indef))
console.log('symbol', symbol, typeof(symbol))
console.log('null', nll, typeof(nll))
console.log('bigInt', bigInt, typeof(bigInt))