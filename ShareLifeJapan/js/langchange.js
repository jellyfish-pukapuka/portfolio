const glot = new Glottologist();
glot.import("lang.json").then(() => {
    glot.render();
})
const zh = document.getElementById('zh');
const en = document.getElementById('en');
const ja = document.getElementById('ja');
zh.addEventListener('click', e => {
    e.preventDefault()
    glot.render('zh-cmn-Hans');
})
en.addEventListener('click', e => {
    e.preventDefault()
    glot.render('en');
})
ja.addEventListener('click', e => {
    e.preventDefault()
    glot.render('ja');
})
function setheight(point) {
    heightElemnt.style.set("height", point);
}
var btn= document.getElementsByClassName('btn');
for (var i = btn.length - 1; i >= 0; i--) {
    btnAction(btn[i],i);
}
function btnAction(btnDOM, btnId) {
    btnDOM.addEventListener("click", function () {
        this.classList.toggle('select');
        for (var i = btn.length - 1; i >= 0; i--) {
            if (btnId !== i) {
                if (btn[i].classList.contains('select')) {
                    btn[i].classList.remove('select');
                }
            }
        }
    });
}