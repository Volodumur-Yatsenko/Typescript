// Custom interactivity for Spectral template (TypeScript)
type Post = {
  id: number;
  title: string;
  body: string;
};

const headerEl: HTMLElement | null = document.querySelector('#header');
const activateButtons: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll('a.button.primary, #cta .button');
const dataContainer: HTMLElement | null = document.querySelector('#data-cards');

// Modal setup
const modalOverlay: HTMLDivElement = document.createElement('div');
modalOverlay.id = 'app-modal';
modalOverlay.innerHTML = `
  <div class="modal-content">
    <button class="modal-close" aria-label="Close modal">&times;</button>
    <h3 id="modal-title">Spectral Modal</h3>
    <p id="modal-body">This is a demo modal window triggered from the page.</p>
  </div>
`;
document.body.appendChild(modalOverlay);

const modalTitle: HTMLElement | null = modalOverlay.querySelector('#modal-title');
const modalBody: HTMLElement | null = modalOverlay.querySelector('#modal-body');
const modalCloseBtn: HTMLButtonElement | null =
  modalOverlay.querySelector('.modal-close');

const openModal = (title: string, body: string): void => {
  if (modalTitle) modalTitle.textContent = title;
  if (modalBody) modalBody.textContent = body;
  modalOverlay.classList.add('open');
};

const closeModal = (): void => {
  modalOverlay.classList.remove('open');
};

modalOverlay.addEventListener('click', (event: MouseEvent): void => {
  if (event.target === modalOverlay) closeModal();
});

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeModal);
}

document.addEventListener('keydown', (event: KeyboardEvent): void => {
  if (event.key === 'Escape') closeModal();
});

activateButtons.forEach((button: HTMLAnchorElement): void => {
  button.addEventListener('click', (event: Event): void => {
    event.preventDefault();
    const label: string = button.textContent?.trim() ?? 'Action';
    openModal(`${label} clicked`, 'Це модальне вікно з кастомним текстом.');
  });
});

// Scroll-driven header state and progress indicator
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

// Fade-in animation via IntersectionObserver
const animatedBlocks: NodeListOf<HTMLElement> = document.querySelectorAll(
  '.spotlight, .features li, #banner .inner, #cta .inner, #data-feed .inner'
);

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

// Fetch demo data and render cards
const renderPosts = (posts: Post[]): void => {
  if (!dataContainer) return;
  dataContainer.innerHTML = '';

  posts.forEach((post: Post): void => {
    const card: HTMLDivElement = document.createElement('div');
    card.className = 'data-card fade-in';
    card.innerHTML = `
      <h4>${post.title.slice(0, 40)}...</h4>
      <p>${post.body.slice(0, 120)}...</p>
    `;
    dataContainer.appendChild(card);
    observer.observe(card);
  });
};

const showError = (message: string): void => {
  if (!dataContainer) return;
  dataContainer.innerHTML = `<p class="data-error">${message}</p>`;
};

const fetchPosts = async (): Promise<void> => {
  try {
    const response: Response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=3'
    );
    if (!response.ok) throw new Error('Bad response');
    const data: Post[] = await response.json();
    renderPosts(data);
  } catch (error) {
    showError('Не вдалось завантажити дані. Спробуйте пізніше.');
    console.error('Fetch error:', error);
  }
};

fetchPosts();



