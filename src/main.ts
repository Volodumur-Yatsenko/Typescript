import { initModal } from './modules/modal/index.js';
import { initScrollProgress } from './modules/scroll/index.js';
import { initFadeIn } from './modules/animation/index.js';
import { initDataFeed } from './modules/data/index.js';

const bootstrap = async (): Promise<void> => {
  initModal('a.button.primary, #cta .button');
  initScrollProgress('#header');

  const observer: IntersectionObserver = initFadeIn(
    '.spotlight, .features li, #banner .inner, #cta .inner, #data-feed .inner'
  );

  await initDataFeed({
    containerSelector: '#data-cards',
    observer,
  });
};

bootstrap().catch((error: unknown): void => {
  console.error('Bootstrap error:', error);
});



