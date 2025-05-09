function getMatchResult(expression) {
    if (expression.length < 3) {
        console.log(`Error: длина выражения меньше 3 символов`);
        return;
    }

    const validOperators = /^(?:\*\*|[+\-<>=/*/])$/

    let filteredExpression = expression.filter((elem) => {
        if (!isNaN(Number(elem)) || validOperators.test(elem)) {
            return true;
        }
        else {
            return false;
        }
    })
    
    let indexOperator = filteredExpression.findIndex((elem) => validOperators.test(elem))
    if (indexOperator === -1) {
        console.log(`Error: Операция не найдена`);
        return;
    }



    if (filteredExpression.filter((elem) => {
        
        return validOperators.test(elem)
    }).length !== 1) {
        console.log(`Error: Операторов больше одного`);
        return;
    }
    
    if (filteredExpression[indexOperator - 1] === undefined || filteredExpression[indexOperator+ 1] === undefined) {
        console.log(`Error: расположение оператора не позволяет выполнить расчет`)
        return;
    }
    
    const operand1 = Number(filteredExpression[indexOperator - 1]);
    const operator = filteredExpression[indexOperator];
    const operand2 = Number(filteredExpression[indexOperator + 1]);
    let answerText = `Выражение ${operand1} ${operator} ${operand2} равно `;
    switch (operator) {
        
        case '+':
            answerText = answerText + `${operand1 + operand2}`;
            break;
        case '-':
            answerText = answerText + `${operand1 - operand2}`;
            break;
        case '*':
            answerText = answerText + `${operand1 * operand2}`;
            break;
        case '**':
            answerText = answerText + `${operand1 ** operand2}`;
            break;
        case '>':
            answerText = answerText + `${operand1 > operand2}`
            break;
        case '<':
            answerText = answerText + `${operand1 < operand2}`;
            break;
        case '=':
            answerText = answerText + `${operand1 === operand2}`;
            break;
        case '/':
            if (operand2 === 0) {
                answerText = answerText + ` ошибка деления на 0`
                break;
            } else {
                answerText = answerText + `${operand1 / operand2}`;
                break;
            }
        default:
            answerText = `Error: ${operator} не найден для вычисления.`
            break;
    }
    console.log(answerText);
}


getMatchResult(['1','/', '2', '4', 5, 6])