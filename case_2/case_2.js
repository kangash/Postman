// Задание 1. Линк-чекер: проверить, что страницы Главная, О нас, Блог, Контакты, Войти доступны и возвращают ответ 200.

pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
});

// Задание 2. Написать тест, который проверяет добавление случайного комментария случайным пользователем. Тест должен проверить, что ответ 200, на странице присутствует ваш комментарий и анонимный автор.

pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
});

pm.test('Post has a new comment', function () {
  pm.expect(pm.response.text()).to.include(pm.environment.get('comment'));
});

pm.test('Comment has a required author', function () {
  pm.expect(pm.response.text()).to.include(pm.environment.get('author'));
});
