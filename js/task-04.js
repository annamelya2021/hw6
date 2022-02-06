// получаем ссылки
const buttons = {
    sub: document.querySelector('[data-action="decrement"]'),
    add: document.querySelector('[data-action="increment"]'),
    counter: document.querySelector('#value')
}
// обьявляем переменную которая будет начальным значение счетчика
let counterValue = 0;
// делаем функцию адд
const plus = () => {
    // на каждом нажатии добавляем +1
    counterValue += 1;
    // и значение велью присваиваем текстовому контенту кнопки
    buttons.counter.textContent = counterValue;
    //   buttons.add.textContent =  buttons.counter.textContent
}
//  делаем функцию саб
const minus = () => {
    // на каждом нажатии добавляем -1
    counterValue -= 1;
    // и значение велью присваиваем текстовому контенту кнопки
    buttons.counter.textContent = counterValue;
    // buttons.sub.textContent =  buttons.counter.textContent
}

// Добавляем слушателей на событие и можно функцию засунуть
// вместо переменной
buttons.add.addEventListener('click', plus)
buttons.sub.addEventListener('click', minus)


