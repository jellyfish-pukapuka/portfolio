// About-title要素を取得
const aboutTitle = document.querySelector('.About-title');

function isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    return isVisible;
}

function animateAboutTitle() {
    if (isScrolledIntoView(aboutTitle)) {
        aboutTitle.classList.add('visible_About');
        window.removeEventListener('scroll', animateAboutTitle);
    }
}

window.addEventListener('scroll', animateAboutTitle);
animateAboutTitle();

// content-About、p 要素を取得
const contentAbout = document.querySelector('.content_About');
const contentAboutParagraph = contentAbout.querySelector('p');

window.addEventListener('scroll', () => {
const scrollPosition = window.scrollY;
const elementPosition = contentAbout.offsetTop;
if (scrollPosition > elementPosition - window.innerHeight / 2) {
    contentAboutParagraph.style.opacity = 1;
    contentAboutParagraph.style.transform = 'translateY(0)';
}
});