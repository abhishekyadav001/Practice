// boolean;
let isBol = true;
isBol = false;
// string;
let firstname = 'abhishek';
let lastname = 'yadav';
let middlename = 'satydev';
// number;
let familyMember = 5;
// Array
let arr = [1, 2, 3];
// arr.push('hi') type error
let stringArr = ['a', 'b', '2'];
// stringArr.push(2); type eror
let genericsArr = [2, 2, 3];
let genericsmultipleArr = [];
//  when we use `?` it means its not required to fill that value while creating any object;
let obj = {
    name: 'abhisek',
    age: 1,
    gender: true,
};
let objofarr = [{ name: 'abhishek', age: 10, gender: false }, { name: 'himanshu', age: 20, gender: true, college: 'vvv' }];
// Tuples
// The types of intial element values in the tuples are fixed 
// The types of those intial elements should be known in advance
//  we can not add more elements in side it. after adding tuples in array.
let tupleArr = [0, 'ahi'];
// ENUMS 
// enums way to group together set of named constants.
var color;
(function (color) {
    color[color["RED"] = 0] = "RED";
    color[color["BLUE"] = 1] = "BLUE";
    color[color["VIOLET"] = 2] = "VIOLET";
})(color || (color = {}));
// if we want to acess it so we can access it by using index numbers;
console.log(color.BLUE); // dote notation, output - 1;
console.log(color[0]); // array notation , output - red;
var books;
(function (books) {
    books["books_request"] = "book-requrst";
    books["books_accepted"] = "book-accepted";
    books["books_done"] = "book-done";
})(books || (books = {}));
// this how we declare enum and can access variables
// others
let a;
let u;
let s; // dont use this because its make code little bit complicated;
//  FUNCTIONS
function sum(a = 0, b) {
    return a + b;
}
console.log(sum(1, 2));
//console.log(sum(1,'2')); // its not addable
function concat(a, b) {
    return a + b;
}
let arr1 = ['s'];
let masaiStudents = {
    name: 'abhishek',
    age: 1,
    gender: true,
    post: 'soft',
};
//# sourceMappingURL=index.js.map