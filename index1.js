"use strict";
let name1 = 'user';
console.log(name1);
function myFunction(name, age) {
    return `Name is ${name} and age is ${age}`;
}
// function createUser({name: string, isPaid: boolean}){}
// let newUser = {name: 'hitesh', isPaid: false, email: "n@n.com"}
// createUser(newUser)
function createCourse() {
    // here the return type of function is object
    return { name: 'typescript', price: 399 };
}
let myUser = {
    _id: '1234',
    name: "n",
    email: "n@example.com",
    isActive: false
};
myUser.email = "a@aexaple.com";
let card = {
    cardNumber: '2345',
    cardDate: '15/07/2023',
    cvv: 234
};
const result = myFunction('john', 22);
console.log(result);
