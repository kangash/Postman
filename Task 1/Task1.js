// http://162.55.220.72:5005/first

// 1. Проверить статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2. Проверить, что в body приходит правильный string
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("This is the first responce from server!ss");
});


﻿// http://162.55.220.72:5005/user_info_3

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