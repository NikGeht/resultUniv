
let searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', () => {
    searchCoffee();
})

let searchText = document.querySelector('input[name="search-text"]');
searchText.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchCoffee();
    }
})

    
function searchCoffee(){
    let answerText = '';
    const coffees = ['Latte', 'Cappuccino', 'Americano'];
    let userTextCoffee = document.querySelector("input[name='search-text']").value.trim();
    if (userTextCoffee === '') {
        answerText = `Введите название кофе`;
    } else {
        userTextCoffee = userTextCoffee[0].toUpperCase() + userTextCoffee.toLowerCase().substring(1, userTextCoffee.length)
        let nameOfCoffee = coffees.find((name) => {
            return name === userTextCoffee})
        // console.log(nameOfCoffee)
        let numberOfCoffeePopularity = coffees.findIndex((name) => {
            return name === userTextCoffee}) + 1;
        
        if (numberOfCoffeePopularity > 0) {
            answerText = `Держите ваш любимый кофе ${nameOfCoffee}. Он ${numberOfCoffeePopularity}-й по популярности в нашей кофейне.`
        } else {
            answerText = `К сожалению, такого вида кофе нет в наличии`
        }
        
    }

    let answer = document.querySelector('.answer');
    answer.textContent = answerText;
    document.querySelector('.answer-text').style.display = 'inline-block';
    document.querySelector("input[name='search-text']").value = '';
    
}