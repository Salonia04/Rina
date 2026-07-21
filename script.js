document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productGrid');

  // Solo corremos esto en index.html (donde existe el grid)
  if (grid) {
    const emptyState = document.getElementById('emptyState');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderGrid(filter = 'todos') {
      const items = filter === 'todos'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === filter);

      grid.innerHTML = items.map(p => `
        <article class="product-card" data-category="${p.category}">
          <a href="producto.html?id=${p.id}" class="product-image-link">
            <div class="product-image">
              <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
            </div>
          </a>
          <a href="producto.html?id=${p.id}" class="product-name-link">
            <h3 class="product-name">${p.name}</h3>
          </a>
          <p class="product-price">${formatPrice(p.price)}</p>
          <a class="whatsapp-btn" target="_blank" rel="noopener" href="${whatsappLink(p.name)}">
            Consultar por WhatsApp
          </a>
        </article>
      `).join('');

      emptyState.hidden = items.length !== 0;
    }

    renderGrid();

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGrid(btn.dataset.filter);
      });
    });
  }

  // Menú mobile (funciona en todas las páginas)
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.style.display === 'flex';
      mainNav.style.display = isOpen ? 'none' : 'flex';
      mainNav.style.flexDirection = 'column';
      mainNav.style.position = 'absolute';
      mainNav.style.top = '64px';
      mainNav.style.left = '0';
      mainNav.style.right = '0';
      mainNav.style.background = '#0a0a0a';
      mainNav.style.padding = '20px';
      mainNav.style.gap = '18px';
      mainNav.style.borderBottom = '1px solid #3a3528';
    });
  }
});