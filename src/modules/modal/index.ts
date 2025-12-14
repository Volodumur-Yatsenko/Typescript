const createModal = (): HTMLDivElement => {
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
  return modalOverlay;
};

const attachCloseHandlers = (overlay: HTMLDivElement): void => {
  const modalCloseBtn: HTMLButtonElement | null =
    overlay.querySelector('.modal-close');

  const closeModal = (): void => {
    overlay.classList.remove('open');
  };

  overlay.addEventListener('click', (event: MouseEvent): void => {
    if (event.target === overlay) closeModal();
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event: KeyboardEvent): void => {
    if (event.key === 'Escape') closeModal();
  });
};

export const initModal = (triggerSelector: string): void => {
  const overlay: HTMLDivElement = createModal();
  const modalTitle: HTMLElement | null = overlay.querySelector('#modal-title');
  const modalBody: HTMLElement | null = overlay.querySelector('#modal-body');
  attachCloseHandlers(overlay);

  const openModal = (title: string, body: string): void => {
    if (modalTitle) modalTitle.textContent = title;
    if (modalBody) modalBody.textContent = body;
    overlay.classList.add('open');
  };

  const triggers: NodeListOf<HTMLAnchorElement> =
    document.querySelectorAll(triggerSelector);

  triggers.forEach((button: HTMLAnchorElement): void => {
    button.addEventListener('click', (event: Event): void => {
      event.preventDefault();
      const label: string = button.textContent?.trim() ?? 'Action';
      openModal(`${label} clicked`, 'Це модальне вікно з кастомним текстом.');
    });
  });
};

