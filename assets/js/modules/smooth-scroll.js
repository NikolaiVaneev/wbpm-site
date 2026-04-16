export function initSmoothScroll() {
    document.addEventListener("click", (event) => {
        const link = event.target.closest("a[href*='#']");

        if (!link) {
            return;
        }

        const url = new URL(link.href, window.location.origin);
        const isSamePage = url.pathname === window.location.pathname;
        const hash = url.hash;

        if (!isSamePage || !hash) {
            return;
        }

        const target = document.querySelector(hash);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}