export function initMenu() {
    const burgerButton = document.getElementById("burger-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!burgerButton || !mobileMenu) {
        return;
    }

    burgerButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("is-open");
        burgerButton.classList.toggle("is-active");
    });

    const links = mobileMenu.querySelectorAll("a");

    links.forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("is-open");
            burgerButton.classList.remove("is-active");
        });
    });
}