export const initFadeIn = (selector) => {
    const animatedBlocks = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    animatedBlocks.forEach((block) => {
        block.classList.add('fade-in');
        observer.observe(block);
    });
    return observer;
};
//# sourceMappingURL=index.js.map