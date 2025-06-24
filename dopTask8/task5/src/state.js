import { COOKIE_CONSENT_KEY } from './constants';

/**
 * @description Инициализирует состояние
 * @returns {void}
 */
export function initState() {
    if (localStorage.length === 0) {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'false');
    }
}

/**
 * @description Устанавливает состояние для баннера в локальном хранилище
 * @param {string} state
 * @returns {void}
 */
export function setState(state) {
    localStorage.setItem(COOKIE_CONSENT_KEY, state);
}