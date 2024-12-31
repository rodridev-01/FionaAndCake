const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const menuLinks = document.querySelectorAll('.side-menu ul li a');

menuToggle.addEventListener('click', function () {
  sideMenu.style.left = '0';
  overlay.style.display = 'block';
});

overlay.addEventListener('click', function () {
  sideMenu.style.left = '-250px';
  overlay.style.display = 'none';
});

menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    sideMenu.style.left = '-250px';
    overlay.style.display = 'none';
  });
});

const container = document.getElementById('episodios-container');

episodios.forEach((episodio) => {
  const episodioDiv = document.createElement('div');
  episodioDiv.classList.add('episodio');

  // Crear un enlace dinámico que redirige al episodio
  const episodioLink = document.createElement('a');
  episodioLink.href = `/Episodios/episodio.html?id=${episodio.id}&name=${encodeURIComponent(episodio.name)}&description=${encodeURIComponent(episodio.description)}&url=${encodeURIComponent(episodio.url)}`;
  episodioLink.classList.add('episodio-link');

  episodioLink.innerHTML = `
      <div class="preview-container">
          <img src="${episodio.preview}" alt="Preview of ${episodio.name}">
      </div>
      <h2>${episodio.name}</h2>
      <p>${episodio.description.substring(0, 100)}...</p>
      <span class="toggle-description">Más</span>
  `;

  episodioDiv.appendChild(episodioLink);
  container.appendChild(episodioDiv);

  const toggleButton = episodioDiv.querySelector('.toggle-description');
  toggleButton.addEventListener('click', () => {
    const p = episodioDiv.querySelector('p');
    if (toggleButton.textContent === 'Más') {
      p.style.whiteSpace = 'normal';
      toggleButton.textContent = 'Menos';
    } else {
      p.style.whiteSpace = 'nowrap';
      toggleButton.textContent = 'Más';
    }
  });
});


