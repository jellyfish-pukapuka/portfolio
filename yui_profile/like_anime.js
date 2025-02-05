// like-title要素を取得
const likeTitle = document.querySelector('.like-title');

function isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    return isVisible;
}

function animateLikeTitle() {
    if (isScrolledIntoView(likeTitle)) {
        likeTitle.classList.add('visible_like');
        window.removeEventListener('scroll', animateLikeTitle);
    }
}

window.addEventListener('scroll', animateLikeTitle);
animateLikeTitle();

// モーダルウィンドウ関連の要素を取得
var popupGeme = document.querySelector('.popup-geme');
var popupGemeTrigger = document.querySelector('.popup-geme_trigger');
var popupMusic = document.querySelector('.popup-music');
var popupMusicTrigger = document.querySelector('.popup-music_trigger');
var popupProgram = document.querySelector('.popup-program');
var popupProgramTrigger = document.querySelector('.popup-program_trigger');
var modalClose = document.querySelectorAll('.modalclose');

popupGemeTrigger.addEventListener('click', function() {
popupGeme.style.display = "block";
});
popupMusicTrigger.addEventListener('click', function() {
popupMusic.style.display = "block";
});
popupProgramTrigger.addEventListener('click', function() {
popupProgram.style.display = "block";
});
modalClose.forEach(function(el) {
el.addEventListener('click', function() {
popupGeme.style.display = "none";
popupMusic.style.display = "none";
popupProgram.style.display = "none";
});
});
window.addEventListener('click', function(e) {
if (e.target == popupGeme) {
popupGeme.style.display = "none";
}
if (e.target == popupMusic) {
popupMusic.style.display = "none";
}
if (e.target == popupProgram) {
popupProgram.style.display = "none";
}
});