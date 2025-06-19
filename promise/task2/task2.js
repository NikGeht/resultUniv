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

function getUsersByIds(ids) {
    toggleLoader();
    const requests = ids.map((id) => {
        return fetch(`${USER_URL}/${id}`);
    })
    Promise.all(requests)
        .then((requests) => {
            const responses = requests.map((response) => {
                return response.json();
            })
            return Promise.all(responses);
        })
        .then((responses) => {
            for(let response of responses) {
                createUserElement(response.name);
                
            }
            console.log(responses);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            toggleLoader();
        })
}

getUsersByIds([5, 6, 2, 1]);

