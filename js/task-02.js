const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// получаем ссылку на ul через айдишник
const ulRef = document.querySelector('#ingredients');

// перебираем массив и на каждой итерации делаем лишку
const markup = ingredients.map(item => {
  // на каждой итерации делаем лишку
const createLi = document.createElement('li');
  console.log(createLi);
  // добавляем внутрь лишки наш перебранный ингредиент название
  createLi.textContent = `${item}`;
  // еа каждую лишку добавляем класс
  createLi.classList.add('ítem')
  // обязательно возвращаем лишку
  return createLi
})
// присоежиняем в существующий ul и высыпаем в него наш markup
ulRef.append(...markup)
