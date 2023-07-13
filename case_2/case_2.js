// Задание 1. Линк-чекер: проверить, что страницы Главная, О нас, Блог, Контакты, Войти доступны и возвращают ответ 200.

pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
});

// Задание 2. Написать тест, который проверяет добавление случайного комментария случайным пользователем. Тест должен проверить, что ответ 200, на странице присутствует ваш комментарий и анонимный автор.

// Pre-request Script

function createGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

let author = createGuid();
let comment = createGuid();

console.log(author);
console.log(comment);

pm.environment.set('author', author);
pm.environment.set('comment', comment);

// Tests

pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
});

pm.test('Post has a new comment', function () {
  pm.expect(pm.response.text()).to.include(pm.environment.get('comment'));
});

pm.test('Comment has a required author', function () {
  pm.expect(pm.response.text()).to.include(pm.environment.get('author'));
});

// Задание 3. Написать тест, который проверяет добавление случайного комментария зарегистрированным пользователем.  Тест должен проверить, что ответ 200, на странице присутствует ваш комментарий и зарегистрированный автор.

// Pre-request Script

function createGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

let comment = createGuid();
console.log(comment);

pm.environment.set('comment', comment);

// Tests

pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
});

pm.test('Post has a new comment', function () {
  pm.expect(pm.response.text()).to.include(pm.environment.get('comment'));
});

pm.test('User is authorized', function () {
  pm.expect(pm.response.text()).to.include('logged-in-as');
});

// Задание 4. Написать 2 теста, которые будут проверять обработку ошибок в случаях, если отправить запрос на создание анонимного комментария без указания автора или емейла. Проверить, что ответ 200, но возвращает нужный текст ошибки.

// Pre-request Script

function createGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

let comment = createGuid();
console.log(comment);
pm.environment.set('comment', comment);

// Tests

pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
});

pm.test('Error text is correct', function () {
  pm.expect(pm.response.text()).to.include('ОШИБКА');
  pm.expect(pm.response.text()).to.include(
    ': пожалуйста, заполните необходимые поля (имя, e-mail).'
  );
});

// Задание 5. Написать тест, который будет добавлять новую запись (пост) на сайт и проверять, что она добавилась успешно: 200 ответ, текст соответствует указанному в тесте.

// Pre-request Script

function createGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

let title = createGuid();
let content = createGuid();

console.log(title);
console.log(content);

pm.environment.set('title', title);
pm.environment.set('content', content);
