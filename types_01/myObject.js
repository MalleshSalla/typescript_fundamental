"use strict";
exports.__esModule = true;
var User = {
    name: "salla mallesh",
    email: "salla@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    console.log(" user created");
}
var newUser = { name: "mallesh", isPaid: false };
createUser(newUser);
function createCourse() {
    return { name: "angular", price: 399 };
}
var course = createCourse();
console.log(course);
