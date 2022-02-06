function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// ссылка на кнопку
const buttonRef = document.querySelector('button')
// ссылка на спан
const spanText = document.querySelector('.color')
// ссылка на боди
const bodyRef = document.querySelector('body')

buttonRef.addEventListener('click', () => {
  //  присваем боди цвет фона равен результату рандома
  bodyRef.style.backgroundColor = getRandomHexColor()
  //присваем cпану текстовое значение рандомного цвета
  spanText.textContent = getRandomHexColor()
})