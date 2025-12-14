const createModal = () => {
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
    return modalOverlay;
};
const attachCloseHandlers = (overlay) => {
    const modalCloseBtn = overlay.querySelector('.modal-close');
    const closeModal = () => {
        overlay.classList.remove('open');
    };
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay)
            closeModal();
    });
    if (modalCloseBtn)
        modalCloseBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape')
            closeModal();
    });
};
export const initModal = (triggerSelector) => {
    const overlay = createModal();
    const modalTitle = overlay.querySelector('#modal-title');
    const modalBody = overlay.querySelector('#modal-body');
    attachCloseHandlers(overlay);
    const openModal = (title, body) => {
        if (modalTitle)
            modalTitle.textContent = title;
        if (modalBody)
            modalBody.textContent = body;
        overlay.classList.add('open');
    };
    const triggers = document.querySelectorAll(triggerSelector);
    triggers.forEach((button) => {
        button.addEventListener('click', (event) => {
            var _a, _b;
            event.preventDefault();
            const label = (_b = (_a = button.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : 'Action';
            openModal(`${label} clicked`, 'Це модальне вікно з кастомним текстом.');
        });
    });
};
//# sourceMappingURL=index.js.map