var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const renderPosts = (posts, container, observer) => {
    container.innerHTML = '';
    posts.forEach((post) => {
        const card = document.createElement('div');
        card.className = 'data-card fade-in';
        card.innerHTML = `
      <h4>${post.title.slice(0, 40)}...</h4>
      <p>${post.body.slice(0, 120)}...</p>
    `;
        container.appendChild(card);
        observer.observe(card);
    });
};
const showError = (container, message) => {
    container.innerHTML = `<p class="data-error">${message}</p>`;
};
export const initDataFeed = (_a) => __awaiter(void 0, [_a], void 0, function* ({ containerSelector, observer, }) {
    const dataContainer = document.querySelector(containerSelector);
    if (!dataContainer)
        return;
    try {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        if (!response.ok)
            throw new Error('Bad response');
        const data = yield response.json();
        renderPosts(data, dataContainer, observer);
    }
    catch (error) {
        showError(dataContainer, 'Не вдалось завантажити дані. Спробуйте пізніше.');
        console.error('Fetch error:', error);
    }
});
//# sourceMappingURL=index.js.map