import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_CLASS } from './constants';

/**
 * @description Прячет банер от куков
 * @returns {void}
 */

export function hideCookieConsent() {
    const cookieConsent = document.querySelector(`.${COOKIE_CONSENT_CLASS}`);
    cookieConsent.classList.add('hide');
}

/**
 * @description Показывает банер от куков
 * @returns {void}
 */
export function showCookieConsent() {
    const cookieConsent = document.querySelector(`.${COOKIE_CONSENT_CLASS}`);
    cookieConsent.classList.remove('hide');
}

/**
 * @description Проверяет, была ли нажата кнопка в локальном хранилище
 * @returns {string | null}
 */
export function checkButtonInLocalStorage() {
    return JSON.parse(localStorage.getItem(COOKIE_CONSENT_KEY));
}
