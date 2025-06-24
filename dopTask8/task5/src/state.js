import { COOKIE_CONSENT_KEY } from './constants';

export function initState() {
    if (localStorage.length === 0) {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'false');
    }
}

export function setState(state) {
    localStorage.setItem(COOKIE_CONSENT_KEY, state);
}