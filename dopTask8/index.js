import './index.css';

function checkButtonInLocalStorage() {
    return localStorage.getItem('acceptUseCookies');
}

function hideCookieConsent() {
    cookieConsent.classList.add('hide');
}

const COOKIE_CONSENT_KEY = 'acceptUseCookies';

const cookieConsent = document.querySelector('.cookie-consent');

if (checkButtonInLocalStorage()) {
    hideCookieConsent();
}

const button = document.querySelector('.cookie-consent__button');
if (button) {
    button.addEventListener('click', () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
        hideCookieConsent();
    });
};