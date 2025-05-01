let existingUserLogin = 'the_best_user'
let existingUserPassword = '123456'

let userLogin = prompt('Введите логин').trim()
let userPassword = prompt('Введите пароль').trim()

userLogin === existingUserLogin && userPassword === existingUserPassword? alert(`Добро пожаловать - ${userLogin}`) : alert(`Логин или пароль введен неверно`)
