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

  // Clientas satisfechas (solo corre si existe el grid en la página)
    // Clientas satisfechas — carrusel
  const clientsGrid = document.getElementById('clientsGrid');
  if (clientsGrid && typeof clientas !== 'undefined') {
    clientsGrid.innerHTML = clientas.map(c => `
      <figure class="client-card">
        <div class="client-photo">
          <img src="${c.foto}" alt="Clienta de Rina" loading="lazy">
          <figcaption>
            <span class="client-name">${c.nombre}</span>
            <span class="client-age">${c.edad} años</span>
          </figcaption>
        </div>
      </figure>
    `).join('');

    const cards = clientsGrid.querySelectorAll('.client-card');
    const prevBtn = document.querySelector('.clients-arrow-prev');
    const nextBtn = document.querySelector('.clients-arrow-next');
    let currentIndex = 0;

    function getVisibleCount() {
      const w = window.innerWidth;
      if (w <= 600) return 1;
      if (w <= 900) return 2;
      return 3;
    }

    function getMaxIndex() {
      return Math.max(0, cards.length - getVisibleCount());
    }

    function updateCarousel() {
      if (cards.length === 0) return;

      const maxIndex = getMaxIndex();
      if (currentIndex > maxIndex) currentIndex = maxIndex;

      const track = clientsGrid;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const cardWidth = cards[0].getBoundingClientRect().width;
      const step = cardWidth + gap;

      track.style.transform = `translateX(-${currentIndex * step}px)`;

      const noArrowsNeeded = cards.length <= getVisibleCount();
      if (prevBtn) prevBtn.style.display = noArrowsNeeded ? 'none' : '';
      if (nextBtn) nextBtn.style.display = noArrowsNeeded ? 'none' : '';
    }

    function goNext() {
      const maxIndex = getMaxIndex();
      currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      updateCarousel();
    }

    function goPrev() {
      const maxIndex = getMaxIndex();
      currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
      updateCarousel();
    }

    if (nextBtn) nextBtn.addEventListener('click', goNext);
    if (prevBtn) prevBtn.addEventListener('click', goPrev);
    window.addEventListener('resize', updateCarousel);

    updateCarousel();
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