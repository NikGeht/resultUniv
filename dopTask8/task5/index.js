import "./index.css";
import { initState, setState } from "./src/state";
import {
    checkButtonInLocalStorage,
    hideCookieConsent,
    showCookieConsent,
} from "./src/cookies";
import { BUTTON_CLASS } from "./src/constants";

/**
 * @description Запускает приложение
 * @returns {void}
 */
function runApp() {
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

runApp();
