let questionFirst = 'JavaScript появился в 1995 году?';
let questionSecond = 'Спецификация JavaScript называется ECMAScript?'
let questionThird = 'JavaScript был создан за 1 месяц?'

let answerFirst = confirm(questionFirst)
console.log(answerFirst)
if (answerFirst) {
    alert('Верно')
} else {
    alert('JavaScript появлися в 1995 году')
}

let answerSecond = confirm(questionSecond)

if (answerSecond) {
    alert('Верно')
} else {
    alert('Спецификация JavaScript называется ECMAScript')
}

let answerThird = confirm(questionThird)
if (!answerThird) {
    alert('Верно')
} else {
    alert('JavaScript был создан за 10 дней')
}