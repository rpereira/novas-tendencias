document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            createLightbox(img.src, img.alt);
        });
    });
});

function createLightbox(imgSrc, imgAlt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';

    lightbox.innerHTML = `
      <div class="lightbox-content">
        <img src="${imgSrc}" alt="${imgAlt}">
        <button class="lightbox-close">&times;</button>
      </div>
    `;

    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';

    // Add lightbox styles dynamically
    const style = document.createElement('style');
    style.textContent = `
      .lightbox {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
      }
      
      .lightbox-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
      }
      
      .lightbox-content img {
        max-width: 100%;
        max-height: 90vh;
        object-fit: contain;
      }
      
      .lightbox-close {
        position: absolute;
        top: -2rem;
        right: -2rem;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
      }
    `;

    document.head.appendChild(style);

    // Close lightbox functionality
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => {
        lightbox.remove();
        document.body.style.overflow = '';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.remove();
            document.body.style.overflow = '';
        }
    });
}