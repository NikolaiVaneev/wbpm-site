import { loadLayout } from "./modules/layout.js";
import { initMenu } from "./modules/menu.js";
import { initSmoothScroll } from "./modules/smooth-scroll.js";

document.addEventListener("DOMContentLoaded", async () => {
    await loadLayout();
    initMenu();
    initSmoothScroll();

    const form = document.getElementById("contact-form");
    const note = document.getElementById("form-note");

    if (form && note) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            form.reset();
            note.textContent = "Форма работает в демо-режиме. Реальную отправку подключим позже.";
        });
    }
});