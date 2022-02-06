
// получаем ссылку на инпут
const InputRef = document.querySelector('#validation-input');

// делаем функцию
const onGetInputName = event => {
    // делаем проверку на количество введенных символов
    if (InputRef.value.length === Number(InputRef.dataset.length)) {
// если длинна символов введенная в инпут равно значению в атрибуте инпута
        // тогда добавь клас валид и он будет зеленым
        InputRef.classList.add('valid');
        InputRef.classList.remove('invalid')
        // удалить инвалид

    } else {
        // в противнов случаем добавь инвалид и удали валид
        InputRef.classList.add('invalid');
         InputRef.classList.remove('valid')
    }

}
InputRef.addEventListener('blur', onGetInputName)
//    при потере фокуса