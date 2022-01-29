
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryWrapper = document.querySelector('.gallery');

const createGalleryEl = el =>
  el
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`,
    )
    .join('');

const galleryMarkup = createGalleryEl(galleryItems);
galleryWrapper.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
lightbox.on('simple-lightbox');

