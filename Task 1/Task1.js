// GET http://162.55.220.72:5005/first

// 1. Проверить статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2. Проверить, что в body приходит правильный string
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("This is the first responce from server!ss");
});



﻿// POST http://162.55.220.72:5005/user_info_3

// 1. Проверить статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2. Спарсить response body в json
let resp = pm.response.json();
let resp_name = resp.name;
let resp_age = +resp.age;
let resp_salary = resp.salary;

// 3. Проверить, что name в ответе равно заданному вручную значению 
pm.test("Check name", function () {
        pm.expect(resp_name).to.eql('Anna');
});

// 4. Проверить, что age в ответе равно заданному вручную значению 
pm.test("Check age", function () {
        pm.expect(resp_age).to.eql(25);
});

// 5. Проверить, что salary в ответе равно заданному вручную значению 
pm.test("Check salary", function () {
        pm.expect(resp_salary).to.eql(1300);
});

// 6. Спарсить request
let req = request.data;
let req_name = req.name;
let req_age = +req.age;
let req_salary = +req.salary;
let req_salary_1_5 = req_salary * 4;

// 7. Проверить, что name в ответе равно name из request
pm.test("Check request name", function () {
        pm.expect(resp_name).to.eql(req_name);
});

// 8. Проверить, что age в ответе равно age из request
pm.test("Check request age", function () {
        pm.expect(resp_age).to.eql(req_age);
});

// 9. Проверить, что salary в ответе равно salary из request
pm.test("Check request salary", function () {
        pm.expect(resp.salary).to.eql(req_salary);
});

// 10. Вывести в консоль параметр family из response
console.log(resp.family);

// 11. Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)
pm.test("Check request u_salary_1_5_year", function () {
        pm.expect(resp.family.u_salary_1_5_year).to.eql(req_salary_1_5);
});



﻿// GET http://162.55.220.72:5005/object_info_3

// 1. Проверить статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2. Спарсить response body в json
let resp = pm.response.json();
let resp_name = resp.name;
let resp_age = +resp.age;
let resp_salary = resp.salary;

// 3. Спарсить request
let req = pm.request.url.query.toObject();
let req_name = req.name;
let req_age = +req.age;
let req_salary = +req.salary;

// 4. Проверить, что name в ответе равно name из request
pm.test("Check request name", function () {
        pm.expect(resp_name).to.eql(req_name);
});

// 5. Проверить, что age в ответе равно age из request
pm.test("Check request age", function () {
        pm.expect(resp_age).to.eql(req_age);
});

// 6. Проверить, что salary в ответе равно salary из request
pm.test("Check request salary", function () {
        pm.expect(resp.salary).to.eql(req_salary);
});

// 7. Вывести в консоль параметр family из response
console.log(resp.family);

// 8. Проверить, что у параметра dog есть параметр name
pm.test("Check dog has name", function () {
    pm.expect(resp.family.pets.dog).to.have.property('name');
});

// 9. Проверить, что у параметра dog есть параметр age
pm.test("Check dog has age", function () {
    pm.expect(resp.family.pets.dog).to.have.property('age');
});

// 10. Проверить, что параметр name имеет значение Luky
pm.test("Check dog name", function () {
    pm.expect(resp.family.pets.dog.name).to.have.eql('Luky');
});

// 11. Проверить, что параметр age имеет значение 4
pm.test("Check dog age", function () {
    pm.expect(resp.family.pets.dog.age).to.have.eql(4);
});



﻿// GET http://162.55.220.72:5005/object_info_4

// 1. Проверить статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2. Спарсить response body в json
let resp = pm.response.json();
let resp_name = resp.name;
let resp_age = +resp.age;
let resp_salary = resp.salary;
let resp_salary_0 = resp.salary[0];
let resp_salary_1 = +resp.salary[1];
let resp_salary_2 = +resp.salary[2];

// 3. Спарсить request
let req = pm.request.url.query.toObject();
let req_name = req.name;
let req_age = +req.age;
let req_salary = +req.salary;

// 4. Проверить, что name в ответе равно name из request
pm.test("Check request name", function () {
        pm.expect(resp_name).to.eql(req_name);
});

// 5. Проверить, что age в ответе равно age из request
pm.test("Check request age", function () {
        pm.expect(resp_age).to.eql(req_age);
});

// 6. Вывести в консоль параметр salary из request
console.log(req.salary);

// 7. Вывести в консоль параметр salary из response
console.log(resp.salary);

// 8. Вывести в консоль 0-й элемент параметра salary из response
console.log(resp.salary[0]);

// 9. Вывести в консоль 1-й элемент параметра salary из response
console.log(resp.salary[1]);

// 10. Вывести в консоль 2-й элемент параметра salary из response
console.log(resp.salary[2]);

// 11. Проверить, что 0-й элемент параметра salary равен salary из request
pm.test("Check salary 0 element", function () {
        pm.expect(resp_salary_0).to.eql(req_salary);
});

// 12. Проверить, что 1-й элемент параметра salary равен salary*2 из request
pm.test("Check salary 1 element", function () {
        pm.expect(resp_salary_1).to.eql(req_salary*2);
});

// 13. Проверить, что 2-й элемент параметра salary равен salary*3 из request
pm.test("Check salary 2 element", function () {
        pm.expect(resp_salary_2).to.eql(req_salary*3);
});

// 14. Написать цикл который выведет в консоль по порядку элементы из параметра salary
for (let salary of resp_salary) {
    console.log(salary);
};

// 15. Создать в окружении переменные name, age и salary и передать в них значения из request
pm.environment.set("name", req_name);
pm.environment.set("age", req_age);
pm.environment.set("salary", req_salary);



﻿// POST http://162.55.220.72:5005/user_info_2
// Использовать параметры name, age и salary из окружения в request

// 1. Проверить статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2. Спарсить response body в json
let resp = pm.response.json();

// 3. Спарсить request
let req = request.data;
let req_salary = +req.salary;
let req_age = +req.age

// 4. Проверить, что json response имеет параметр start_qa_salary
pm.test("Check start_qa_salary parameter", function () {
    pm.expect(resp).to.have.property('start_qa_salary');
});

// 5. Проверить, что json response имеет параметр qa_salary_after_6_months
pm.test("Check qa_salary_after_6_months parameter", function () {
    pm.expect(resp).to.have.property('qa_salary_after_6_months');
});

// 6. Проверить, что json response имеет параметр qa_salary_after_12_months
pm.test("Check qa_salary_after_12_months parameter", function () {
    pm.expect(resp).to.have.property('qa_salary_after_12_months');
});

// 7. Проверить, что json response имеет параметр qa_salary_after_1.5_year
pm.test("Check qa_salary_after_1.5_year parameter", function () {
    pm.expect(resp).to.have.property('qa_salary_after_1.5_year');
});

// 8. Проверить, что json response имеет параметр qa_salary_after_3.5_years
pm.test("Check qa_salary_after_3.5_years parameter", function () {
    pm.expect(resp).to.have.property('qa_salary_after_3.5_years');
});

// 9. Проверить, что json response имеет параметр person
pm.test("Check person parameter", function () {
    pm.expect(resp).to.have.property('person');
});

// 10. Проверить, что параметр start_qa_salary равен salary из request
pm.test("Check start_qa_salary", function () {
    pm.expect(resp.start_qa_salary).to.eql(req_salary);
});

// 11. Проверить, что параметр qa_salary_after_6_months равен salary*2 из request 
pm.test("Check qa_salary_after_6_months", function () {
    pm.expect(resp.qa_salary_after_6_months).to.eql(req_salary*2);
});

// 12. Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request 
pm.test("Check qa_salary_after_12_months", function () {
    pm.expect(resp.qa_salary_after_12_months).to.eql(req_salary*2.7);
});

// 13. Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request
pm.test("Check qa_salary_after_1.5_year", function () {
    pm.expect(resp['qa_salary_after_1.5_year']).to.eql(req_salary*3.3);
});

// 14. Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request
pm.test("Check qa_salary_after_3.5_years", function () {
    pm.expect(resp['qa_salary_after_3.5_years']).to.eql(req_salary*3.8);
});

// 15. Проверить, что в параметре person, 1-й элемент из u_name равен salary из request
pm.test("Check u_name", function () {
    pm.expect(resp.person.u_name[1]).to.eql(req_salary);
});

// 16. Проверить, что что параметр u_age равен age из request
pm.test("Check u_age", function () {
    pm.expect(resp.person.u_age).to.eql(req_age);
});

// 17. Проверить, что параметр u_salary_5_years равен salary*4.2 из request 
pm.test("Check u_salary_5_years", function () {
    pm.expect(resp.person.u_salary_5_years).to.eql(req_salary*4.2);
});

// 18. Написать цикл который выведет в консоль по порядку элементы из параметра person
Object.entries(resp.person).forEach(([key, value]) => console.log(key, value));
for (key in resp.person) {
    console.log(key, resp.person[key])
};