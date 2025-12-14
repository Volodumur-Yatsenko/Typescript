export const initFadeIn = (selector: string): IntersectionObserver => {
  const animatedBlocks: NodeListOf<HTMLElement> =
    document.querySelectorAll(selector);

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry: IntersectionObserverEntry): void => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedBlocks.forEach((block: HTMLElement): void => {
    block.classList.add('fade-in');
    observer.observe(block);
  });

  return observer;
};

