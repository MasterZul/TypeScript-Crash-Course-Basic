"use strict";
//Basic type
let id = 5;
let company = 'MasterZul';
let isPublished = true;
let x = 'Hello';
let age = 36;
//array
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
//Tupple
let person = [1, 'Zul', false];
//Tupple array
let employee;
employee = [
    [1, 'Zul'],
    [2, 'Aslam'],
    [3, 'Dol']
];
//Union (can use 2 different data type)
let pid;
//Enum
var Direction1;
(function (Direction1) {
    Direction1["UP"] = "UP";
    Direction1["DOWN"] = "DOWN";
    Direction1["LEFT"] = "LEFT";
    Direction1["RIGHT"] = "RIGHT";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'Zul'
};
//Type Assertion (can choose either this 2 style to declare)
let cid = 1;
// let customerId = <number>cid;
let customerid = cid;
//Function (can set noImplicitAny to "false" in tsconfig.json but that not recomanded)
function addNum(x, y) {
    return x + y;
}
//Void Function "no return fucntion" & the parameter also can be dynamic data type
function printOnly(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Zul'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
add(5, 6);
sub(5, 6);
//Classes (private, protected, public)
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now register`;
    }
}
const zul = new Person(5, 'Zul');
const dol = new Person(1, 'Dol');
//Another Example Class extend with existing class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // same like "this.id = id" like in the parent class but this one much simpler
        this.position = position;
    }
}
const emp = new Employee(3, 'KZ', 'Consultant');
console.log(emp.register());
