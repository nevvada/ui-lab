const button = document.querySelector('.open-modal-button');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', (event) => {
  const isModalOpen = !modal.classList.contains('hide');
  const isClickOutsideModal = !modal.contains(event.target);

  if (isModalOpen && isClickOutsideModal) {
    overlay.classList.add('hide');
    modal.classList.add('hide');
  }
});

button.addEventListener('click', () => {
  overlay.classList.remove('hide');
  modal.classList.remove('hide');
});
