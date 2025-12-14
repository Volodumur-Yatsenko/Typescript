"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const headerEl = document.querySelector('#header');
const activateButtons = document.querySelectorAll('a.button.primary, #cta .button');
const dataContainer = document.querySelector('#data-cards');
// Modal setup
const modalOverlay = document.createElement('div');
modalOverlay.id = 'app-modal';
modalOverlay.innerHTML = `
  <div class="modal-content">
    <button class="modal-close" aria-label="Close modal">&times;</button>
    <h3 id="modal-title">Spectral Modal</h3>
    <p id="modal-body">This is a demo modal window triggered from the page.</p>
  </div>
`;
document.body.appendChild(modalOverlay);
const modalTitle = modalOverlay.querySelector('#modal-title');
const modalBody = modalOverlay.querySelector('#modal-body');
const modalCloseBtn = modalOverlay.querySelector('.modal-close');
const openModal = (title, body) => {
    if (modalTitle)
        modalTitle.textContent = title;
    if (modalBody)
        modalBody.textContent = body;
    modalOverlay.classList.add('open');
};
const closeModal = () => {
    modalOverlay.classList.remove('open');
};
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay)
        closeModal();
});
if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
}
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape')
        closeModal();
});
activateButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        var _a, _b;
        event.preventDefault();
        const label = (_b = (_a = button.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : 'Action';
        openModal(`${label} clicked`, 'Це модальне вікно з кастомним текстом.');
    });
});
// Scroll-driven header state and progress indicator
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
// Fade-in animation via IntersectionObserver
const animatedBlocks = document.querySelectorAll('.spotlight, .features li, #banner .inner, #cta .inner, #data-feed .inner');
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
// Fetch demo data and render cards
const renderPosts = (posts) => {
    if (!dataContainer)
        return;
    dataContainer.innerHTML = '';
    posts.forEach((post) => {
        const card = document.createElement('div');
        card.className = 'data-card fade-in';
        card.innerHTML = `
      <h4>${post.title.slice(0, 40)}...</h4>
      <p>${post.body.slice(0, 120)}...</p>
    `;
        dataContainer.appendChild(card);
        observer.observe(card);
    });
};
const showError = (message) => {
    if (!dataContainer)
        return;
    dataContainer.innerHTML = `<p class="data-error">${message}</p>`;
};
const fetchPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        if (!response.ok)
            throw new Error('Bad response');
        const data = yield response.json();
        renderPosts(data);
    }
    catch (error) {
        showError('Не вдалось завантажити дані. Спробуйте пізніше.');
        console.error('Fetch error:', error);
    }
});
fetchPosts();
//# sourceMappingURL=main.js.map