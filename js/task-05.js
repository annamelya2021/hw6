// берем ссылку на форму
const InputRef = document.querySelector('#name-input');
// добываем ссылку на спан где анонимус
const spanRef = document.querySelector('#name-output');

// добавляем слушателя события на инпут
InputRef.addEventListener('input', event => {
    // если значение инпута пустая строка
    if (InputRef.value === "") {
        // выводим анонимус
        spanRef.textContent = "Anonymous"
    } else {
        // если в инпуте что-то есть выводим это в спан
          spanRef.textContent = event.currentTarget.value;
     }

});