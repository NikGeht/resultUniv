// Task 1
console.log(`Task 1`);

const users = [
    {
      username: 'David',
      status: 'online',
      lastActivity: 10
    },
    {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    },
    {
            username: 'Bob',
            status: 'online',
            lastActivity: 104
          }
  ];

// function getOnlineUsers(users) {
//     let usersOnlineNames = [];
//     for (let user of users){
//         if(user.status === 'online') {
//             usersOnlineNames.push(user.username)
//         }
//     }
//     usersOnlineNames = usersOnlineNames.join(', ');
//     return `Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`
// }

function getOnlineUsers(users) {
    let onlineUsers = users.filter(user => user.status === 'online')
    // return `Сейчас в онлайн следующие пользователи: ${keysUsersOnline.join(', ')}`;
    let onlineUsersUserName = onlineUsers.map(user => user.username)

    return `Сейчас в онлайн следующие пользователи: ${onlineUsersUserName.join(', ')}`
}

console.log(getOnlineUsers(users))


// Task 2

console.log(`Task 2`);

const ordersArr = [4, 2, 1, 3];
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];

// function giveTalonsInOrder(people, ordersArr) {
//     let test = ordersArr.map((valueOrder) => {
//         return people.filter((name) => name.id === valueOrder)
//         // return people.find(name => name.id === valueOrder)
//     })
//     return test
// }

/*Попробовал применить навыки после урока про перебор в объектах, однако так и не понял, 
почему нельзя использовать filter, find, map (гуглил). Ведь массив - это по сути и есть объект.
*/

function giveTalonsInOrder(people, ordersArr) {
    let test = ordersArr.map(valueOrder => {
        return Object.values(people).filter((name) => {
            return name.id === valueOrder})
    });
    return test
}

// 10
 
const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);
/* Возвращает массив
[
   { id: 4, name: 'Виталий' },
   { id: 2, name: 'Николай' },
   { id: 1, name: 'Максим' },
   { id: 3, name: 'Ангелина' }
]
*/

// Task 3

console.log(`Task 3`);

function handleObject(object, key, action, value) {
    switch(action) {
        case 'get':
            return object[key];
        case 'add':
            object[key] = ''
            return object;
        case 'delete':
            delete object[key];
            return object;

        // добавлено поиграться
        case 'update':
            object[key] = value;
            return object;
        default:
            return object;
    }
}


const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
 }
  
 const resultObj = handleObject(student, 'programmingLanguage', 'delete');
 console.log('result', resultObj); // { name: 'Maxim' }

 // Task 4

 console.log(`Task 4`);

function giveJobToStudent(student, newJob) {
    // Судя по ТЗ - создать новый объект со студентом, поэтому использовал spread-оператор
    let studentCopy = {
        ...student
    }
    studentCopy['jobName'] = newJob;
    console.log(`Поздравляем! У студента ${studentCopy.fullName} появилась новая работа! Теперь он ${studentCopy.jobName}`)
    return studentCopy;
}

 const studentTask4 = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
  }
  
  const updatedStudent = giveJobToStudent(studentTask4, 'веб-разработчик');
  /*
  updatedStudent = {
      fullName: 'Максим',
      experienceInMonths: 12,
      stack: ['HTML', 'CSS', 'JavaScript', 'React'],
      job: 'веб-разработчик',
  }
  */

  console.log(updatedStudent)

