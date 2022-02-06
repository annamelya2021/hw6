// получаем ссылку на спан с текстом абракадабра
const spanRef = document.querySelector('#text')
// получаем ссылку на инпут с бегунком
const InputRef = document.querySelector('#font-size-control')
// можно и без нижней строки но если убрать будет скакать текст
 spanRef.style.fontSize = `${InputRef.value}px`
// ставим слушателя на инпут
InputRef.addEventListener('input', event => {
    // размер шрифта спана равен значению инпута
    spanRef.style.fontSize = `${InputRef.value}px`;
})