(function () {
    const pathname = window.location.pathname;
    const isIndexPage = pathname.endsWith('index.html') || pathname === '/' || pathname === '/index';

    // Redirect only if we're on the index page and not on welcome.html
    if (isIndexPage && !pathname.includes('welcome.html')) {
        const lastVisit = localStorage.getItem('lastVisit');
        const currentTime = Date.now();

        // If first time or 12+ hours passed
        if (!lastVisit || (currentTime - lastVisit) > 12 * 60 * 60 * 1000) {
            localStorage.setItem('lastVisit', currentTime);
            window.location.replace('welcome.html');
        }
    }
})();
