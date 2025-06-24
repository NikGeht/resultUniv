import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_CLASS } from './constants';

export function hideCookieConsent() {
    const cookieConsent = document.querySelector(`.${COOKIE_CONSENT_CLASS}`);
    cookieConsent.classList.add('hide');
}

export function showCookieConsent() {
    const cookieConsent = document.querySelector(`.${COOKIE_CONSENT_CLASS}`);
    cookieConsent.classList.remove('hide');
}

export function checkButtonInLocalStorage() {
    return JSON.parse(localStorage.getItem(COOKIE_CONSENT_KEY));
}
