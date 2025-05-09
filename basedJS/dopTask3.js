function validatePassword(password) {
    if (password.length < 3 || password.length > 30) {
        console.log(`Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.`);
        return;
    }
    if(password.match('[0-9]') && password.match('[a-z]') && password.match('[A-Z]')) {
        console.log(`Пароль валидный. Добро пожаловать в аккаунт!`);
        return;
    } else {
        console.log(`Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.`);
        return;
    }
}

const password = '1234F';

validatePassword(password)