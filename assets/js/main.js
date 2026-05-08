const SELECTORS = {
    header: "[data-header]",
    navToggle: "[data-nav-toggle]",
    navMenu: "[data-nav-menu]",
    navLinks: ".nav-links a",
    reveal: ".reveal",
    currentYear: "[data-current-year]"
};

const closeMobileNavigation = (toggle, menu) => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
};

const setupMobileNavigation = () => {
    const toggle = document.querySelector(SELECTORS.navToggle);
    const menu = document.querySelector(SELECTORS.navMenu);

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            closeMobileNavigation(toggle, menu);
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMobileNavigation(toggle, menu);
        }
    });
};

const setupHeaderScroll = () => {
    const header = document.querySelector(SELECTORS.header);

    if (!header) return;

    const updateHeader = () => {
        header.classList.toggle("is-scrolled", window.scrollY > 16);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
};

const setupActiveNavigation = () => {
    const links = Array.from(document.querySelectorAll(SELECTORS.navLinks))
        .filter((link) => link.getAttribute("href")?.startsWith("#"));

    const sections = links
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                links.forEach((link) => {
                    link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
                });
            });
        },
        {
            rootMargin: "-35% 0px -55% 0px",
            threshold: 0.01
        }
    );

    sections.forEach((section) => observer.observe(section));
};

const setupRevealAnimations = () => {
    const elements = document.querySelectorAll(SELECTORS.reveal);

    if (!elements.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        elements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.14
        }
    );

    elements.forEach((element) => observer.observe(element));
};

const setupCurrentYear = () => {
    document.querySelectorAll(SELECTORS.currentYear).forEach((element) => {
        element.textContent = new Date().getFullYear();
    });
};

const setupExternalLinkLogging = () => {
    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
        link.addEventListener("click", () => {
            console.info(`Opening external link: ${link.href}`);
        });
    });
};

const setupIcons = () => {
    if (window.lucide) {
        window.lucide.createIcons();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    setupCurrentYear();
    setupMobileNavigation();
    setupHeaderScroll();
    setupActiveNavigation();
    setupRevealAnimations();
    setupExternalLinkLogging();
    setupIcons();
});
