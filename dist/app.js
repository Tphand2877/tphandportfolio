const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Mở menu'); }
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  mobileNav.hidden = isOpen;
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Mở menu' : 'Đóng menu');
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const cards = [...document.querySelectorAll('.photo-card')];
const gallery = document.querySelector('.gallery');
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(filter => { const active = filter === button; filter.classList.toggle('active', active); filter.setAttribute('aria-pressed', String(active)); });
  const category = button.dataset.filter;
  let count = 0;
  cards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; if (!card.hidden) count++; });
  gallery.classList.toggle('is-filtered', category !== 'all');
  document.querySelector('.gallery-count').textContent = `${String(count).padStart(2, '0')} KHUNG HÌNH`;
}));
const dialog = document.querySelector('.lightbox');
let activeCard;
function showPhoto(card) {
  activeCard = card;
  const image = document.querySelector('#lightbox-image');
  image.src = card.dataset.image;
  image.alt = card.querySelector('img').alt;
  document.querySelector('#lightbox-title').textContent = card.dataset.title;
  document.querySelector('#lightbox-category').textContent = card.dataset.type + ' / ẢNH MINH HỌA';
  const visible = cards.filter(c => !c.hidden);
  document.querySelector('#lightbox-index').textContent = `${visible.indexOf(card) + 1} / ${visible.length}`;
}
cards.forEach(card => card.addEventListener('click', () => { showPhoto(card); dialog.showModal(); document.body.classList.add('modal-open'); }));
function navigatePhoto(direction) { const visible = cards.filter(c => !c.hidden); showPhoto(visible[(visible.indexOf(activeCard) + direction + visible.length) % visible.length]); }
document.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
document.querySelector('.lightbox-prev').addEventListener('click', () => navigatePhoto(-1));
document.querySelector('.lightbox-next').addEventListener('click', () => navigatePhoto(1));
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('keydown', event => { if (event.key === 'ArrowLeft') { event.preventDefault(); navigatePhoto(-1); } if (event.key === 'ArrowRight') { event.preventDefault(); navigatePhoto(1); } });
let toastTimer;
function toast(message) { const element = document.querySelector('.toast'); element.textContent = message; element.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => element.classList.remove('show'), 3500); }
document.querySelector('.copy-email').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText('phanducthuan287@gmail.com'); toast('Đã sao chép địa chỉ email.'); }
  catch { toast('Bạn có thể sao chép: phanducthuan287@gmail.com'); }
});
document.querySelector('#year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { document.querySelectorAll('.desktop-nav a').forEach(link => { if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); } }); }, { rootMargin: '-20% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
