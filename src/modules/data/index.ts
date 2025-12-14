import { Post } from '../../types/post.js';

type DataDependencies = {
  containerSelector: string;
  observer: IntersectionObserver;
};

const renderPosts = (
  posts: Post[],
  container: HTMLElement,
  observer: IntersectionObserver
): void => {
  container.innerHTML = '';

  posts.forEach((post: Post): void => {
    const card: HTMLDivElement = document.createElement('div');
    card.className = 'data-card fade-in';
    card.innerHTML = `
      <h4>${post.title.slice(0, 40)}...</h4>
      <p>${post.body.slice(0, 120)}...</p>
    `;
    container.appendChild(card);
    observer.observe(card);
  });
};

const showError = (container: HTMLElement, message: string): void => {
  container.innerHTML = `<p class="data-error">${message}</p>`;
};

export const initDataFeed = async ({
  containerSelector,
  observer,
}: DataDependencies): Promise<void> => {
  const dataContainer: HTMLElement | null =
    document.querySelector(containerSelector);
  if (!dataContainer) return;

  try {
    const response: Response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=3'
    );
    if (!response.ok) throw new Error('Bad response');
    const data: Post[] = await response.json();
    renderPosts(data, dataContainer, observer);
  } catch (error) {
    showError(dataContainer, 'Не вдалось завантажити дані. Спробуйте пізніше.');
    console.error('Fetch error:', error);
  }
};

