document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('productDetail');
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    container.innerHTML = `
      <div class="not-found">
        <p class="eyebrow">Vestido no encontrado</p>
        <h1>No pudimos encontrar esta prenda</h1>
        <a class="whatsapp-btn" href="main.html">Volver al catálogo</a>
      </div>
    `;
    return;
  }

  document.title = `${product.name} — Rina Alta Costura`;

  const images = product.images && product.images.length ? product.images : ['img/placeholder.jpg'];
  const hasMultiple = images.length > 1;

  container.innerHTML = `
    <div class="product-detail-grid">
      <div class="carousel" id="carousel">
        <div class="carousel-main">
          ${hasMultiple ? `
            <button class="carousel-arrow prev" aria-label="Foto anterior">‹</button>
            <button class="carousel-arrow next" aria-label="Foto siguiente">›</button>
          ` : ''}
          <div class="carousel-track" id="carouselTrack">
            ${images.map(src => `
              <div class="carousel-slide">
                <img src="${src}" alt="${product.name}">
              </div>
            `).join('')}
          </div>
        </div>
        ${hasMultiple ? `
          <div class="carousel-dots" id="carouselDots">
            ${images.map((_, i) => `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Ver foto ${i + 1}"></button>`).join('')}
          </div>
        ` : ''}
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

  if (hasMultiple) {
    initCarousel(images.length);
  }
});

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

  // Swipe support for mobile
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
  track.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - startX;
    if (diff > 50) goTo(current - 1);
    if (diff < -50) goTo(current + 1);
  });
}