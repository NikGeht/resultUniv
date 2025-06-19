/* <form class="create-user-form">
        <label>
            Имя
            <input type="text" name="userName" placeholder="Введите ваше имя">
        </label>
        <label>
            Пароль
            <input type="password" name="password" placeholder="Придумайте Пароль">
        </label>
        <button type="submit">
            Подтвердить
        </button>
    </form> */

const body = document.querySelector('body')
console.log(body)
// Первый вариант

// body.innerHTML = `<form class="create-user-form">
//         <label>
//             Имя
//             <input type="text" name="userName" placeholder="Введите ваше имя">
//         </label>
//         <label>
//             Пароль
//             <input type="password" name="password" placeholder="Придумайте Пароль">
//         </label>
//         <button type="submit">
//             Подтвердить
//         </button>
//     </form>`;

// Второй вариант

let form = document.createElement('form')
form.className = 'create-user-form';
body.append(form)

let labelName = document.createElement('label')
labelName.innerText = 'Имя';

let labelPassword = document.createElement('label')
labelPassword.innerText = 'Пароль';

let buttonSubmit = document.createElement('button')
buttonSubmit.innerText = 'Подтвердить';
buttonSubmit.type = 'submit';

let inputPassword = document.createElement('input')
inputPassword.type = 'password';
inputPassword.name = 'password';
inputPassword.placeholder = 'Придумайте пароль';

let inputName = document.createElement('input')
inputName.type = 'text';
inputName.name = 'userName';
inputName.placeholder = 'Введите ваше имя';

labelPassword.append(inputPassword);
labelName.append(inputName);
form.append(labelName, labelPassword, buttonSubmit);


