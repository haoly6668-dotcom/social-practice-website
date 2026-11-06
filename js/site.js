(function () {
    "use strict";

    const root = document.documentElement;
    const header = document.querySelector(".site-header");
    const menuButton = document.querySelector(".site-menu-button");
    const navigation = document.querySelector(".site-nav");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let revealObserver = null;

    function revealPassedElements() {
        if (reduceMotion) {
            return;
        }

        document.querySelectorAll(".is-waiting").forEach(function (element) {
            const bounds = element.getBoundingClientRect();

            if (bounds.top <= window.innerHeight * 1.08) {
                element.classList.remove("is-waiting");

                if (revealObserver) {
                    revealObserver.unobserve(element);
                }
            }
        });
    }

    function closeNavigation() {
        if (!menuButton || !navigation) {
            return;
        }

        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "打开导航菜单");
    }

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            const isOpen = navigation.classList.toggle("is-open");

            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute("aria-label", isOpen ? "关闭导航菜单" : "打开导航菜单");
        });

        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeNavigation);
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeNavigation();
            }
        });

        document.addEventListener("click", function (event) {
            if (
                navigation.classList.contains("is-open") &&
                !navigation.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                closeNavigation();
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 768) {
                closeNavigation();
            }
        });
    }

    const progress = document.createElement("div");
    let scrollFrame = 0;

    progress.className = "site-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.prepend(progress);

    function updateScrollState() {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;

        if (header) {
            header.classList.toggle("is-scrolled", window.scrollY > 36);
        }

        progress.style.transform = `scaleX(${ratio})`;
        revealPassedElements();
        scrollFrame = 0;
    }

    function requestScrollUpdate() {
        if (!scrollFrame) {
            scrollFrame = requestAnimationFrame(updateScrollState);
        }
    }

    updateScrollState();
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);

    const legacyRevealGroups = document.querySelectorAll(".reveal, .stagger");
    const revealElements = document.querySelectorAll("[data-reveal]");

    if (!reduceMotion && "IntersectionObserver" in window) {
        root.classList.add("motion-ready");

        legacyRevealGroups.forEach(function (element) {
            element.classList.add("is-waiting");
        });

        revealElements.forEach(function (element) {
            element.classList.add("is-waiting");
        });

        revealObserver = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove("is-waiting");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -36px"
            }
        );

        legacyRevealGroups.forEach(function (element) {
            revealObserver.observe(element);
        });

        revealElements.forEach(function (element) {
            revealObserver.observe(element);
        });

        revealPassedElements();

        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                document.querySelectorAll(".hero-sequence").forEach(function (element) {
                    element.classList.add("is-entered");
                });
            });
        });
    }

    const canParallax =
        !reduceMotion &&
        window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (canParallax) {
        document.querySelectorAll("[data-parallax]").forEach(function (element) {
            const container = element.closest("section") || element.parentElement;
            let parallaxFrame = 0;
            let nextX = 0;
            let nextY = 0;

            function renderParallax() {
                element.style.setProperty("--parallax-x", `${nextX}px`);
                element.style.setProperty("--parallax-y", `${nextY}px`);
                parallaxFrame = 0;
            }

            container.addEventListener("pointermove", function (event) {
                const bounds = container.getBoundingClientRect();
                const xRatio = (event.clientX - bounds.left) / bounds.width - 0.5;
                const yRatio = (event.clientY - bounds.top) / bounds.height - 0.5;

                nextX = Math.round(xRatio * 12);
                nextY = Math.round(yRatio * 12);

                if (!parallaxFrame) {
                    parallaxFrame = requestAnimationFrame(renderParallax);
                }
            });

            container.addEventListener("pointerleave", function () {
                nextX = 0;
                nextY = 0;

                if (!parallaxFrame) {
                    parallaxFrame = requestAnimationFrame(renderParallax);
                }
            });
        });
    }
})();
