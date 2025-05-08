const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel(arr) {
    if (arr.length === 0) {
        console.log(`Очередь пуста`)
        return;
    }
    let name = arr.shift()
    console.log(`${name} получил(а) посылку. В очереди осталось ${arr.length} человек`)
}

function leaveQueueWithoutParcel(arr, number = arr.length) {
    // console.log(number)
    if (arr.length === 0) {
        console.log(`Очередь пуста`);
        return;
    }
    if (typeof(number) !== 'number') {
        number = arr.length
    } else if (typeof(number) === 'number') {
        number = Math.min(number, arr.length)
    }
    for (let i = 0; i < number; i++) {
        let name = arr.shift()
        console.log(`${name} не получил(а) посылку и ушел(ла) из очереди`)
    }
}

giveParcel(peopleWaiting)
giveParcel(peopleWaiting)
leaveQueueWithoutParcel(peopleWaiting)

