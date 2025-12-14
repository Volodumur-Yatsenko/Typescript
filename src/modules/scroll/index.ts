export const initScrollProgress = (headerSelector: string): void => {
  const headerEl: HTMLElement | null = document.querySelector(headerSelector);

  const progressWrapper: HTMLDivElement = document.createElement('div');
  progressWrapper.className = 'scroll-progress';
  progressWrapper.innerHTML = '<span class="scroll-progress__fill"></span>';
  document.body.appendChild(progressWrapper);

  const progressFill: HTMLSpanElement | null =
    progressWrapper.querySelector('.scroll-progress__fill');

  const updateProgress = (): void => {
    const scrollTop: number = window.scrollY;
    const docHeight: number = document.body.scrollHeight - window.innerHeight;
    const percent: number = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressFill) progressFill.style.width = `${percent}%`;
    if (headerEl) headerEl.classList.toggle('is-scrolled', scrollTop > 80);
  };

  window.addEventListener('scroll', updateProgress);
  window.addEventListener('resize', updateProgress);
  updateProgress();
};

