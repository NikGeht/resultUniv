let clientsEstimations = [];

function askClientToGiveEstimation() {
    let getRating = Number(prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`).trim());
    return getRating;
}

for (let i = 0; i < 5; i++) {
    let newRating = askClientToGiveEstimation();
    if (!isNaN(newRating) && newRating >= 1 && newRating <= 10) {
        clientsEstimations.push(newRating);
    }
}

let goodEstimations = clientsEstimations.filter((rating) => {
    return (rating > 5)
})

let notGoodEstimations = clientsEstimations.filter((rating) => {
    return (rating <= 5)
})

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`)