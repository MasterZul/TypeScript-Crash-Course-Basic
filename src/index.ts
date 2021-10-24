//Basic type
let id: number = 5
let company: string = 'MasterZul'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number = 36

//array
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

//Tupple
let person: [number, string, boolean] = [1,'Zul', false]

//Tupple array
let employee: [number, string] []
employee = [
    [1,'Zul'],
    [2,'Aslam'],
    [3,'Dol']
]

//Union (can use 2 different data type)
let pid: string | number

//Enum
enum Direction1{
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

//Object
type User = {
    id: number
    name: string
}

const user: User = {
     id: 1, 
     name: 'Zul'
}

//Type Assertion (can choose either this 2 style to declare)
let cid: any = 1;
// let customerId = <number>cid;
let customerid = cid as number

//Function (can set noImplicitAny to "false" in tsconfig.json but that not recomanded)
function addNum (x: number, y: number): number {
    return x + y
}

//Void Function "no return fucntion" & the parameter also can be dynamic data type
function printOnly (message: string | number): void{
    console.log(message);
}

//Interface (like template for paramter)
interface UserInterface  {
    id: number
    name: string
    age?: number
}

const user1: UserInterface = {
     id: 1, 
     name: 'Zul'
}

interface MathFunc {
    (x: number, y: number): number 
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

add(5,6)
sub(5,6) 

//Classes (private, protected, public)
class Person implements PersonInterface{ 
     id: number
     name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register (){
        return `${this.name} is now register`
    }
}

const zul = new Person(5,'Zul')
const dol = new Person(1,'Dol')
//console.log(zul.register())


//Implement this interface to the class Person
interface PersonInterface  {
    id: number
    name: string
    register(): string
}

//Another Example Class extend with existing class

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string){
     super(id,name) // same like "this.id = id" like in the parent class but this one much simpler
     this.position = position
    }
}

const emp = new Employee (3, 'KZ', 'Consultant')
console.log(emp.register())

//Generic
function getArray(items: any[]): any{
    return new Array().concat(items)
}

let numArray = getArray([1,2,3,4])
let strmArray = getArray(['Zul','KZ','Dol'])

