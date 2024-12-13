function onMenuClick() {
    const nav = document.querySelector('.nav-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';

    nav.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', !isExpanded);

    // Update menu icon
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.querySelector('.nav-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    if (!nav.contains(e.target) && !menuBtn.contains(e.target) && nav.classList.contains('active')) {
        onMenuClick();
    }
});