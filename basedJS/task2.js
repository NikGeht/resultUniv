let questions = ['Сколько будет 2 + 2?', 'Сколько будет 2 * 2?', 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?', 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет.Сколько в итоге конфет осталось у Маши?', 'Сколько будет 2 + 2 * 2?']

let answers = [4, 4, 1, 12, 6]
let correctAnswers = 0
let incorrectAnswers = 0
for (i = 0; i < questions.length; i++) {
    let userAnswer = Number(prompt(questions[i]).trim())
    if (userAnswer === answers[i]) {
        correctAnswers += 1
        alert('Ответ верный!')
    } else {
        incorrectAnswers += 1
        alert('Ответ неверный!')
    }
}

alert(`Верных ответов - ${correctAnswers}. Неверный ответов - ${incorrectAnswers}`)