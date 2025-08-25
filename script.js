document.getElementById('y').textContent = new Date().getFullYear();
const toggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});