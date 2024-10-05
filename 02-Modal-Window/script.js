document.addEventListener('DOMContentLoaded', function () {
  ////////////// DOM Elements
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const btnCloseModal = document.querySelector('.close-modal');
  const btnsOpenModal = document.querySelectorAll('.show-modal');

  ////////////// Open modal function
  const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  ////////////// Close modal function
  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  ////////////// Add event listeners to open modal buttons
  for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
  }

  ////////////// Add event listeners to close modal button and overlay
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  ////////////// Close modal on Escape key press
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
