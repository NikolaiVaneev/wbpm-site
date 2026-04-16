export function initMenu() {
    const burgerButton = document.getElementById("burger-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeButton = document.getElementById("mobile-menu-close");
    const mobileServicesToggle = document.getElementById("mobile-services-toggle");
    const mobileServicesPanel = document.getElementById("mobile-services-panel");

    if (!burgerButton || !mobileMenu) {
        return;
    }

    const openMenu = () => {
        mobileMenu.classList.add("is-open");
        burgerButton.classList.add("is-active");
        burgerButton.setAttribute("aria-expanded", "true");
        mobileMenu.setAttribute("aria-hidden", "false");
        document.body.classList.add("menu-open");
    };

    const closeMenu = () => {
        mobileMenu.classList.remove("is-open");
        burgerButton.classList.remove("is-active");
        burgerButton.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        document.body.classList.remove("menu-open");
    };

    burgerButton.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.contains("is-open");

        if (isOpen) {
            closeMenu();
            return;
        }

        openMenu();
    });

    if (closeButton) {
        closeButton.addEventListener("click", closeMenu);
    }

    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    if (mobileServicesToggle && mobileServicesPanel) {
        mobileServicesToggle.addEventListener("click", () => {
            const isExpanded =
                mobileServicesToggle.getAttribute("aria-expanded") === "true";

            mobileServicesToggle.setAttribute("aria-expanded", String(!isExpanded));
            mobileServicesPanel.classList.toggle("is-open", !isExpanded);
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}