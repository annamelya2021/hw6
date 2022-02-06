
// получаем массив всех полученных ссылок с классом ('.item')
const liRef = document.querySelectorAll('.item')
// выводим в консоль длину этого массива
console.log('Number of categories) :>> ', liRef.length);

// перебираем массив
for (const item of liRef) {
// для каждого заголовка берем ссылку и вынимаем текстовое значение и логируем
    console.log('Category:', item.querySelector('h2').textContent)
    // у всех лишек на каждой итерации берем ссылку и считаем количество этих лишек
    console.log('Elements:',item.querySelectorAll('li').length)
}

