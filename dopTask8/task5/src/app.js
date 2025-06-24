import { initState, setState } from "./state";
import { checkButtonInLocalStorage, hideCookieConsent, showCookieConsent } from "./cookies";
import { BUTTON_CLASS } from "./constants";

/**
 * @description Запускает приложение
 * @returns {void}
 */
export function runApp() {
    initState();
    if (checkButtonInLocalStorage()) {
        hideCookieConsent();
    } else {
        showCookieConsent();
    }

    const button = document.querySelector(`.${BUTTON_CLASS}`);
    if (button) {
        button.addEventListener("click", () => {
            setState("true");
            hideCookieConsent();
        });
    }
}