export function navigateTo(href: string) {
    if (href === "/") {
        if (window.location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        window.location.assign("/");
        return;
    }

    if (href.startsWith("/")) {
        window.location.assign(href);
        return;
    }

    if (href.startsWith("#")) {
        if (window.location.pathname !== "/") {
            window.location.assign(`/${href}`);
            return;
        }

        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
}
