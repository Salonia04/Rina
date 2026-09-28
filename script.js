/* Catálogo de productos -------------------------------------------------------------------------------------- */

function initCatalog() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

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

/* Navbar deslizante -------------------------------------------------------------------------------------- */

function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScroll = 0;
  const threshold = 80; 

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll <= threshold) {
      header.classList.remove('hide');
    } else if (currentScroll > lastScroll) {
      header.classList.add('hide');
    } else {
      header.classList.remove('hide'); 
    }

    lastScroll = currentScroll;
  });
}

/* Carrusel Clientas Satisfechas -------------------------------------------------------------------------------------- */

function initClientsCarousel() {
  const track = document.getElementById('clientsGrid');
  if (!track || typeof clientas === 'undefined') return;

  // Render
  track.innerHTML = clientas.map(c => `
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

  const cards = track.querySelectorAll('.client-card');
  const prevBtn = document.querySelector('.clients-arrow-prev');
  const nextBtn = document.querySelector('.clients-arrow-next');
  let currentIndex = 0;

  cards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      cards.forEach((other, otherIndex) => {
        if (otherIndex < index) other.classList.add('push-left');
        else if (otherIndex > index) other.classList.add('push-right');
      });
    });

    card.addEventListener('mouseleave', () => {
      cards.forEach(other => other.classList.remove('push-left', 'push-right'));
    });
  });

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

    currentIndex = Math.min(currentIndex, getMaxIndex());

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = cards[0].getBoundingClientRect().width + gap;
    track.style.transform = `translateX(-${currentIndex * step}px)`;

    const hideArrows = cards.length <= getVisibleCount();
    if (prevBtn) prevBtn.style.display = hideArrows ? 'none' : '';
    if (nextBtn) nextBtn.style.display = hideArrows ? 'none' : '';
  }

  // Navegación con loop
  function goNext() {
    currentIndex = currentIndex >= getMaxIndex() ? 0 : currentIndex + 1;
    updateCarousel();
  }

  function goPrev() {
    currentIndex = currentIndex <= 0 ? getMaxIndex() : currentIndex - 1;
    updateCarousel();
  }

  if (nextBtn) nextBtn.addEventListener('click', goNext);
  if (prevBtn) prevBtn.addEventListener('click', goPrev);
  window.addEventListener('resize', updateCarousel);

  updateCarousel();
}


/* Menú mobile -------------------------------------------------------------------------------------- */

function initMobileMenu() {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (!navToggle || !mainNav) return;

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.style.display === 'flex';

    Object.assign(mainNav.style, {
      display: isOpen ? 'none' : 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '64px',
      left: '0',
      right: '0',
      background: '#0a0a0a',
      padding: '20px',
      gap: '18px',
      borderBottom: '1px solid #3a3528'
    });
  });
}


/* Inicio -------------------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  initCatalog();
  initClientsCarousel();
  initMobileMenu();
  initStickyHeader();
});