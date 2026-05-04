let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-x');
  navbar.classList.toggle('active');
};

// Show success toast if redirected back after form submission
if (new URLSearchParams(window.location.search).get('success') === 'true') {
  const toast = document.createElement('div');
  toast.className = 'nf-toast';
  toast.innerHTML = '<i class="fa-solid fa-circle-check"></i> Request sent! I\'ll be in touch soon.';
  document.body.appendChild(toast);
  history.replaceState(null, '', window.location.pathname);
  setTimeout(() => toast.classList.add('nf-toast-show'), 50);
  setTimeout(() => {
    toast.classList.remove('nf-toast-show');
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}

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

