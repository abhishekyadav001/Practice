// boolean;
let isBol:boolean = true;
isBol=false;

// string;
let firstname:string='abhishek';
let lastname:string ='yadav';
let middlename='satydev';

// number;
let familyMember:number =5;

// Array

let arr:number[]=[1,2,3];
// arr.push('hi') type error
let stringArr:string[]=['a','b','2'];
// stringArr.push(2); type eror
let genericsArr:Array<number>=[2,2,3];
let genericsmultipleArr:Array<number>=[];


// Objects 

// shape of the objects -> interface, type
// interface and types -> ways to create blueprints for our objects
// Primitve types in typescript --> number, string, boolean, null, undefined, symbol and big-int.

type students ={
    name:string,
    age:number,
    gender:boolean,
    college?:string,
}
//  when we use `?` it means its not required to fill that value while creating any object;
let obj:students={
    name:'abhisek',
    age:1,
    gender:true,
}

let objofarr:students[]=[{name:'abhishek',age:10,gender:false},{name:'himanshu', age:20,gender:true,college:'vvv'}]

// Tuples
// The types of intial element values in the tuples are fixed 
// The types of those intial elements should be known in advance
//  we can not add more elements in side it. after adding tuples in array.
let tupleArr:[number,string]=[0,'ahi']


// ENUMS 
// enums way to group together set of named constants.

enum color {
    RED,
    BLUE,
    VIOLET
}
// if we want to acess it so we can access it by using index numbers;
 console.log(color.BLUE) // dote notation, output - 1;
console.log(color[0]) // array notation , output - red;

enum books {
    books_request='book-requrst',
    books_accepted='book-accepted',
    books_done="book-done"
}

// this how we declare enum and can access variables

// others
let a:undefined;
let u:null; 
let s:any; // dont use this because its make code little bit complicated;

//  FUNCTIONS

function sum(a:number=0,b:number){
    return a+b
}
console.log(sum(1,2));
//console.log(sum(1,'2')); // its not addable
function concat(a,b):void{
    return a+b;
}

// Union ,Set theory
//  Either ,Or
interface company{
post:string,
salery?:number
}

let arr1:[string | boolean]=['s'];

let masaiStudents:students & company ={
    name:'abhishek',
    age:1,
    gender:true,
    post:'soft',
}

