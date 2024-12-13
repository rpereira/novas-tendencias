function onMenuClick() {
    const nav = document.querySelector('.nav-menu');
    nav.classList.toggle('active');

    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('active');
}