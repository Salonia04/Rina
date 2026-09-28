/* Datos -------------------------------------------------------------------------------------- */

function getProductFromUrl() {
  const id = new URLSearchParams(window.location.search).get('id');
  return PRODUCTS.find(p => p.id === id);
}


/* Renders -------------------------------------------------------------------------------------- */

function renderNotFound(container) {
  container.innerHTML = `
    <div class="not-found">
      <p class="eyebrow">Vestido no encontrado</p>
      <h1>No pudimos encontrar esta prenda</h1>
      <a class="whatsapp-btn" href="main.html">Volver al catálogo</a>
    </div>
  `;
}

function renderProduct(container, product, images) {
  const hasMultiple = images.length > 1;

  const arrows = hasMultiple ? `
    <button class="carousel-arrow prev" aria-label="Foto anterior">‹</button>
    <button class="carousel-arrow next" aria-label="Foto siguiente">›</button>
  ` : '';

  const slides = images.map(src => `
    <div class="carousel-slide">
      <img src="${src}" alt="${product.name}">
    </div>
  `).join('');

  const dots = hasMultiple ? `
    <div class="carousel-dots" id="carouselDots">
      ${images.map((_, i) => `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Ver foto ${i + 1}"></button>`).join('')}
    </div>
  ` : '';

  container.innerHTML = `
    <div class="product-detail-grid">
      <div class="carousel" id="carousel">
        <div class="carousel-main">
          ${arrows}
          <div class="carousel-track" id="carouselTrack">${slides}</div>
        </div>
        ${dots}
      </div>
      <div class="product-detail-info">
        <p class="eyebrow">${product.category}</p>
        <h1>${product.name}</h1>
        <p class="product-detail-price">${formatPrice(product.price)}</p>
        <p class="product-detail-description">${product.description}</p>
        <a class="whatsapp-btn large" target="_blank" rel="noopener" href="${whatsappLink(product.name)}">
          Consultar por WhatsApp
        </a>
        <a class="back-link" href="main.html#coleccion">← Volver al catálogo</a>
      </div>
    </div>
  `;
}


/* Carrusel de fotos -------------------------------------------------------------------------------------- */

function initCarousel(count) {
  const track = document.getElementById('carouselTrack');
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.querySelector('.carousel-arrow.prev');
  const nextBtn = document.querySelector('.carousel-arrow.next');
  let current = 0;

  function goTo(index) {
    current = (index + count) % count;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));
  dots.forEach(dot => {
    dot.addEventListener('click', () => goTo(Number(dot.dataset.index)));
  });

  // Swipe en mobile
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
  track.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - startX;
    if (diff > 50) goTo(current - 1);
    if (diff < -50) goTo(current + 1);
  });
}


/* Print -------------------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('productDetail');
  const product = getProductFromUrl();

  if (!product) {
    renderNotFound(container);
    return;
  }

  document.title = `${product.name} — Rina Alta Costura`;

  const images = product.images && product.images.length
    ? product.images
    : ['img/placeholder.jpg'];

  renderProduct(container, product, images);

  if (images.length > 1) {
    initCarousel(images.length);
  }
});