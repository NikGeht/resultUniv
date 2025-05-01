let userText = prompt('Введите текст').trim()
let fragmentOfText = prompt('Введите слово из текста или часть текста').trim()

let indexOfFragments = userText.indexOf(fragmentOfText)
let string = userText.substring(0, indexOfFragments)
alert(`Результат ${string}`)