isPalindrome('racecar') // true 
isPalindrome('programmer') // false

function isPalindrome(str) {
    console.log(str === str.split('').reverse().join(''));
}