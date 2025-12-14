export const initScrollProgress = (headerSelector) => {
    const headerEl = document.querySelector(headerSelector);
    const progressWrapper = document.createElement('div');
    progressWrapper.className = 'scroll-progress';
    progressWrapper.innerHTML = '<span class="scroll-progress__fill"></span>';
    document.body.appendChild(progressWrapper);
    const progressFill = progressWrapper.querySelector('.scroll-progress__fill');
    const updateProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        if (progressFill)
            progressFill.style.width = `${percent}%`;
        if (headerEl)
            headerEl.classList.toggle('is-scrolled', scrollTop > 80);
    };
    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);
    updateProgress();
};
//# sourceMappingURL=index.js.map