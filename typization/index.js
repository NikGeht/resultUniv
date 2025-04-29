let param1 = 'test';
console.log(Number(param1), Boolean(param1), String(param1));
let param2 = 23;
console.log(Number(param2), Boolean(param2), String(param2));
let param3 = true;
console.log(Number(param3), Boolean(param3), String(param3));
let param4 = null;
console.log(Number(param4), Boolean(param4), String(param4));
let param5;
console.log(Number(param5), Boolean(param5), String(param5));
let param6 = {
    key: param1
}
console.log(Number(param6), Boolean(param6), String(param6));
let param8 = 200n;
console.log(Number(param8), Boolean(param8), String(param8));
let param7 = symbol("id")
console.log(Number(param7), Boolean(param7), String(param7));


