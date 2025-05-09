checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');

function checkQuestionAnswer(question, correctAnswer) {
    let userAnswer = prompt(`${question}`).trim().toLowerCase()
    if (userAnswer === correctAnswer.toLowerCase()) {
        alert('Верный ответ!')
    } else {
        alert(`Ответ неверный. Правильный ответ - ${correctAnswer}`)
    }
}


