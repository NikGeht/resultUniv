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

