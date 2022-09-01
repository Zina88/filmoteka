import { STORAGE_KEY_MOVIE  } from './constants';
import { openMovieCard } from './modalCardOpen';
import { saveToWatched, removeFromWatched, saveToQueue, removeFromQueue } from './modalCardOpen';



const refs = {
  gallery: document.querySelector('.gallery'),
  openModal: document.querySelector('.modal[data-modal]'),
  closeModal: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.backdropMovie'),
  modal: document.querySelector('.movie-modal-wrap'),

  watchBtn: document.querySelector('#watchedModalBtn'),
  queueBtn: document.querySelector('#queueModalBtn'),

};

refs.gallery.addEventListener('click', onGalleryClick);
refs.modal.addEventListener('click', onBackdropClick);
refs.closeModal.addEventListener('click', onCloseModal);

function onGalleryClick(e) {
  e.preventDefault();
  if (
    e.target.nodeName !== 'IMG' &&
    e.target.nodeName !== 'P' &&
    e.target.nodeName !== 'LI'
  ) {
    return;
  }
  onOpenModal();
  openMovieCard(e);
}

function onOpenModal() {
  refs.backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onTargetKeydown);
  document.body.style.overflow = "hidden"; 
}

function onCloseModal() {
  refs.backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onTargetKeydown);
  document.body.style.overflow = "";
  localStorage.removeItem(STORAGE_KEY_MOVIE);
  refs.watchBtn.removeEventListener('click', saveToWatched);
  refs.watchBtn.removeEventListener('click', removeFromWatched);
  refs.queueBtn.removeEventListener('click', saveToQueue);
  refs.queueBtn.removeEventListener('click', removeFromQueue);
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onTargetKeydown(e) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = e.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}






