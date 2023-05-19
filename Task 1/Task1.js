// http://162.55.220.72:5005/first
// 1. Проверить статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
// 2. Проверить, что в body приходит правильный string
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("This is the first responce from server!ss");
});