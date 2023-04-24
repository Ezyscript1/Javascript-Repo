'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
// console.log(showModal);

const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  //   console.log(showModal[i].textContent);
  showModal[i].addEventListener('click', openModal);
}

closeModal.addEventListener('click', hideModal);

overlay.addEventListener(
  'click',
  hideModal
  // hideModal();
);

// keypress events
document.addEventListener('keydown', function (e) {
  // console.log('A key was pressed');
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});
