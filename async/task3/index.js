const ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums';

function toggleLoader() {
    const loader = document.querySelector('#loader');
    if (loader.hasAttribute('hidden')) {
        loader.removeAttribute('hidden');
    } else {
        loader.setAttribute('hidden', '');
    }
}

function createAlbumElement(title) {
    const albumListItem = document.createElement('li');
    albumListItem.textContent = title;
    return albumListItem;
}

function createNoAlbumsElement() {
    const noAlbums = document.createElement('div');
    noAlbums.textContent = 'Альбомов нет';
    return noAlbums;
}


async function fetchingAlbums() {
    toggleLoader();
    try {
        const response = await fetch(ALBUM_URL, {
            method: 'GET',
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    } finally {
        toggleLoader();
    }
}

async function renderAlbums() {
    const dataContainer = document.querySelector('#data-container');

    const dataAlbums = await fetchingAlbums();
    if (dataAlbums && dataAlbums.length > 0) {
        for(let album of dataAlbums) {
            dataContainer.append(createAlbumElement(album.title));
        }
    } else {
        dataContainer.append(createNoAlbumsElement());
    }
}

renderAlbums();

