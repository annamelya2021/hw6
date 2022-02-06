const formRef = document.querySelector('.login-form');
// задачка из конспекта поменяла только на алерт
function onHandleSubmit(event) {
    event.preventDefault();
// убираем перезагрузку страницы
  const {
      // деструктурируем
        elements: { email, password } } = event.currentTarget
// проверка все ли поля заполнены
    if (event.currentTarget.email.value === '' || event.currentTarget.password.value === '') {
      // если какое то полк пустое то выводим алерт
      return alert('Все поля должны форм быть заполнены')
    } else {
      // если все ое выводим значения
      console.log(`Email: ${email.value}, Password: ${password.value}`);

  event.currentTarget.reset();
}
}

formRef.addEventListener('submit', onHandleSubmit);
