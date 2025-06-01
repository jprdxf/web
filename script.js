document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
  loadDoxes();
  changeLanguage();

  document.getElementById('doxForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const author = document.getElementById('author').value.trim();
    const desc = document.getElementById('description').value.trim();

    if (author && desc) {
      const doxes = JSON.parse(localStorage.getItem('doxes') || '[]');
      doxes.push({ author, desc });
      localStorage.setItem('doxes', JSON.stringify(doxes));
      document.getElementById('doxForm').reset();
      loadDoxes();
    }
  });
});

function showSection(id) {
  document.querySelectorAll('.content-section').forEach(sec => {
    sec.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

function loadDoxes() {
  const list = document.getElementById('doxList');
  list.innerHTML = '';
  const doxes = JSON.parse(localStorage.getItem('doxes') || '[]');

  doxes.forEach((dox) => {
    const entry = document.createElement('div');
    entry.className = 'dox-entry';
    entry.textContent = dox.author;

    const detail = document.createElement('div');
    detail.className = 'dox-details hidden';
    detail.textContent = dox.desc;

    entry.addEventListener('click', () => {
      detail.classList.toggle('hidden');
    });

    entry.appendChild(detail);
    list.appendChild(entry);
  });
}
