const PHOTOS_URL = 'https://api.slingacademy.com/v1/sample-data/photos';

function createPhotoElement(src, title) {
    const photoListItem = document.createElement('li');
    photoListItem.classList.add('photo-item');
    const photoImg = document.createElement('img')
    photoImg.className = 'photo-item__image';
    photoImg.src = src;
    const photoTitle = document.createElement('h3');
    photoTitle.className = 'photo-item__title';
    photoTitle.textContent = title;

    photoListItem.append(photoImg, photoTitle);

    document.querySelector('#data-container').append(photoListItem);
}

function toggleLoader() {
    const loader = document.querySelector('#loader');
    if (loader.hasAttribute('hidden')) {
        loader.removeAttribute('hidden');
    } else {
        loader.setAttribute('hidden', '');
    }
}

function getFastestLoadedPhoto(ids) {
    toggleLoader();
    const requests = ids.map((id) => fetch(`${PHOTOS_URL}/${id}`));
    Promise.race(requests)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            createPhotoElement(data.photo.url, data.photo.title);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            toggleLoader();
        })
};


getFastestLoadedPhoto([60, 12, 55]);

