import '../utils/scroll-lock';
const menuElement = document.querySelector('[data-menu="burger-menu"]');
const menuButtonElement = document.querySelector('[data-menu="button"]');
const buttonImageElement = menuButtonElement.querySelector('svg').querySelector('use');
const overlayElement = document.querySelector('[data-overlay]');
const linkElement = document.querySelectorAll('[data-menu="link"]');
// const bodyElement = document.querySelector('body');

const isActive = 'is-active';
const isOpen = 'is-open';

const onEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    closeMenu();
  }
};

const onLinkElementClick = () => {
  closeMenu();
};

const openMenu = () => {
  menuButtonElement.classList.add(isActive);
  menuElement.classList.add(isOpen);
  buttonImageElement.setAttribute('href', '__spritemap#sprite-close-icon');
  overlayElement.style.display = 'block';
  document.addEventListener('keydown', onEscKeyDown);
  linkElement.forEach((link) => {
    link.addEventListener('click', onLinkElementClick);
  });
  // window.scrollLock.disableScrolling();
  // bodyElement.style.overflow = 'hidden';
};

function closeMenu() {
  menuButtonElement.classList.remove(isActive);
  menuElement.classList.remove(isOpen);
  buttonImageElement.setAttribute('href', '__spritemap#sprite-menu-icon');
  overlayElement.style.display = 'none';
  linkElement.forEach((link) => {
    link.removeEventListener('click', onLinkElementClick);
  });
}

export const initBurgerMenu = () => {
  if (menuButtonElement.classList.contains(isActive)) {
    closeMenu();
  } else {
    openMenu();
  }
};

menuButtonElement.addEventListener('click', initBurgerMenu);
