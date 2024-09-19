// Select elements from the DOM
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Function to open the modal
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Add event listeners to open modal buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Function to close the modal
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Add event listeners to close modal button and overlay
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Add event listener to document for Escape key press
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
