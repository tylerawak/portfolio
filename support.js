let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-x');
  navbar.classList.toggle('active');
};

const modal = document.getElementById('contact-modal');
const openBtn = document.getElementById('contact-btn');
const closeBtn = document.getElementById('modal-close');

openBtn.onclick = () => modal.classList.remove('hidden');
closeBtn.onclick = () => modal.classList.add('hidden');
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') modal.classList.add('hidden');
});
