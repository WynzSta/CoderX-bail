document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.classList.add('visible-onload');
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll, .animate-on-load:not(.hero)');

    elementsToAnimate.forEach(el => {
        if (!el.closest('.hero')) {
            observer.observe(el);
        } else {
            el.classList.add('visible');
        }
    });

    console.log("Hyuraa.js loaded - TwentyEight 🐉 v9 (Final Fix) Ready!");
});