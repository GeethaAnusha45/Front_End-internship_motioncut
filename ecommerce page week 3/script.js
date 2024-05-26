window.addEventListener('scroll', function() {
    const heroImage = document.querySelector('.hero-image');
    heroImage.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});
