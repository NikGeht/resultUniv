const USER_URL = 'https://jsonplaceholder.typicode.com/users';

function createUserElement(name) {
    const userListItem = document.createElement('li');
    const userAnchor = document.createElement('a');
    userAnchor.href = '#';
    userAnchor.textContent = name;

    userListItem.append(userAnchor);
    document.querySelector('#data-container').append(userListItem);
}

function toggleLoader() {
    const loader = document.querySelector('#loader');
    if (loader.hasAttribute('hidden')) {
        loader.removeAttribute('hidden');
    } else {
        loader.setAttribute('hidden', '');
    }
}

function getAllUsers() {
    toggleLoader();
    fetch(USER_URL)
    .then((response) => {
        if (response.ok) {
            const data = response.json();
            return data;
        } else {
            throw new Error('Error in fetch users');
        }
    })
    .then((users) => {
        for (let user of users) {
            createUserElement(user.name);
        }
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        toggleLoader()
    })
}

getAllUsers();

