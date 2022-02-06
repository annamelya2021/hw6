const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// получаем ссылку на ul по классу
const galeryRef = document.querySelector('.gallery');
// перебираем массив мепом и на каждой итерации делаем разметку
// и класс добавляем сразу в разметку
//
const createMarkup = images.map(img =>
  // с помощью шаблонной строки на каждую итерацию
  // добавляем разметку
  // вклыдываем в лишку имг
`<li class="gallery__item" >
    <img class='gallery__img' src='${img.url}' alt='${img.alt}' width=100 height=100>
    </li>`
).join('')// соединяем все в одну строку

// метод insertAdjacentHTML().
galeryRef.insertAdjacentHTML('afterbegin', createMarkup)