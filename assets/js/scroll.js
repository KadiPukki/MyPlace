window.addEventListener('scroll', () => {
    const header = document.querySelector('.nav-bar');
    header.classList.add('active-scroll', window.scrollY > 100);
})