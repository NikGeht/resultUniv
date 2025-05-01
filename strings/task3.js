const userName = prompt('Как вас зовут?')
let userAge = prompt('Сколько вам лет?')
userAge = Number(userAge.trim())


alert(`Вас зовут ${userName.toUpperCase().trim()} и вам ${userAge} лет`)