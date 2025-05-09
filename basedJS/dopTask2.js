
function calcClientDiscount() {
    let clientName = prompt(`Введите имя клиента`).trim();

    if (!isNaN(Number(clientName))) {
        alert(`Перезагрузите страницу и введите корректное имя клиента`);
        return;
    }
    let clientSpentForAllTime = Number(prompt(`Сколько клиент потратил всего?`).trim());

    if (isNaN(clientSpentForAllTime)) {
        alert(`Сумма должна быть числом! Перезагрузите страницу и попробуйте еще раз`);
        return;
    }

    let clientSpentToday = Number(prompt(`Сколько клиент потратил сегодня?`).trim());

    if (isNaN(clientSpentToday)) {
        alert(`Сумма должна быть числом! Перезагрузите страницу и попробуйте еще раз`);
        return;
    }

    let discount = 0;

    if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
        discount = 10;
    } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
        discount = 20;
    } else if (clientSpentForAllTime >= 500) {
        discount = 30;
    }

    clientSpentToday = clientSpentToday * (100 - discount) / 100;
    clientSpentForAllTime += clientSpentToday;

    return [discount, clientSpentToday, clientName, clientSpentForAllTime];
}

const [discount, clientSpentToday, clientName, clientSpentForAllTime] = calcClientDiscount();

alert(`Вам предоставляется скидка в ${discount}%!`)

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)