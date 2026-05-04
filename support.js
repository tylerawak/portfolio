let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-x');
  navbar.classList.toggle('active');
};

const modal = document.getElementById('contact-modal');
const openBtn = document.getElementById('contact-btn');
const closeBtn = document.getElementById('modal-close');

openBtn.onclick = () => {
  modal.classList.remove('hidden');
  modal.querySelector('.modal-box').scrollTop = 0;
};
closeBtn.onclick = () => modal.classList.add('hidden');
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') modal.classList.add('hidden');
});

// AJAX form submission
const form = document.getElementById('support-form');
const modalBox = modal.querySelector('.modal-box');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const submitBtn = form.querySelector('.nf-submit');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(form),
    });
    const data = await res.json();

    if (data.success) {
      modalBox.innerHTML = `
        <div class="nf-success">
          <i class="fa-solid fa-circle-check"></i>
          <h2>Request sent!</h2>
          <p>I'll review your request and get back to you at the email you provided.</p>
          <button class="btn" id="nf-close-success">Close</button>
        </div>`;
      document.getElementById('nf-close-success').onclick = () => {
        modal.classList.add('hidden');
        // Reset after modal closes so it's fresh next time
        setTimeout(() => location.reload(), 400);
      };
    } else {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Request Support';
      alert('Something went wrong. Please try again.');
    }
  } catch {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Request Support';
    alert('Something went wrong. Please check your connection and try again.');
  }
});
