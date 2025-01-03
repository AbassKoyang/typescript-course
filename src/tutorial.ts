// // Type annotations

// console.log('typescript tutorial');
// let awesomeName: string = 'Ahmad';
// awesomeName = awesomeName.toUpperCase();
// console.log(awesomeName);

// let smallNumber: number = 2;
// smallNumber = smallNumber - 1;
// console.log(smallNumber);

// let isAwesome: boolean = true;
// if(isAwesome){
//     console.log("You're Awesome!!");
// };

//Wrong, would throw an error.

// awesomeName = 4;
// smallNumber = 'Ahmad';
// isAwesome = {name: 'ahmad'};

// console.log(awesomeName, smallNumber, isAwesome);

// // Union types
// // Union types allows the combination of multiple types for the same variable. The type of the value assigned to a variable can be any of the datatypes specified in the union. The syntax is as follow: 
// let tax: number | string = 100;
// tax = 10;
// tax = '$100';

// // The types specified in a union can also be literal. That is, the types in the union can be the values the variable is expected to hold. For example:

// let requestStatus : 'pending' | 'success' | 'error' = 'pending';
// requestStatus = 'success';
// console.log(requestStatus);

// //If you try to set the value of the variable to a value other than the ones specified in the union, typescript will throw an error. For example:
// requestStatus = 'random'; //This would throw an error.

// const books = ['1984', 'Things fall part', 'Purple hibiscus'];

// let foundBook : string | undefined;

// for (let book of books ){
//     if (book == '1984') {
//         foundBook = book;
//         foundBook = foundBook.toUpperCase();
//     }
//     break;
// }
// console.log(
//     foundBook?.length
// );



// // Arrays in Typescript

// const books2: string[] = ['1984', 'Things fall part', 'Purple hibiscus'];
// books2.push('Faceless');
// // books2.push(1980); // error

// const temperatures: number[] = [25, 20, 15];
// temperatures.push(10);
// // temperatures.push('10deg'); //error

// const mixedArray: (string | number)[] = [1, 'two', 3];



// // Objects in Typescript

// let car: {brand: string; year: number, cost?: number} = {brand: 'toyota', year: 2020}; //cost is optional
// // car.year = '1999'// error
// // car.make = 'camry'; //error - the property "make" isn't defined in the type annotation



// // Objects amd Arrays

// let dog1 = {name: 'simba', age: 10, specie: 'golden retriever' };
// let dog2 = {name: 'chase', age: 7, specie: 'great dane' };
// let dog3 = {name: 'molly', age: 12,};

// let dogs: {name: string; age: number; specie?: string}[] = [dog1, dog2, dog3];



// //Functions

// function sayHi(name: string){ // explicitly defining the type of a parameter
//     console.log(`Hi, ${name}`)
// }

// sayHi('Jake');
// sayHi(23) // error


// function calculateDiscount(price: number) : number { // explicitly defining the function's return type
//     return price * 0.5;
// }

// const discountedPrice = calculateDiscount(200); //the function returns a number, if the function returns anything other than a number, typescipt will throw an error.



// // Optional and Default parameters
// // optional parameter
// // To make a parameter optional, we add a question mark at the end of the pararmeter, just before the type annotation.
// const calculateDiscount = (price: number, discount?: number) : number => {
//     // return price - discount; // this would throw an error because the value of discount could potentially be undefined (that is if no argument is passed when the function is called). We obviously can't substract undefined from the price.
//     //To solve this, we need to write the operation in a way such that it works regardless wether  the optional parameter is undefined or not.
//     return price - (discount || 0); // If the discount is undefined, zero is subtarcted.
// }

// const discountedPrice : number = calculateDiscount(200, 10); //no error
// const discountedPrice : number = calculateDiscount(200); // no error

// //defualt parameter
// // A parameter can have a default value which is used a if no argument is passsed when the function is invoked. The syntax is as follows:
// const calculateScore = (initialScore: number, penaltyPoints: number = 0) : number => {
//     return initialScore - penaltyPoints;
// }

// const scoreAfterPenalty : number = calculateScore(100, 10) // no error
// const scoreWithoutPenalty : number = calculateScore(100) // no error



// Rest operator in typescript

// function sum(message: string, ...numbers: number[]) : string{
//    const doubled : number[] = numbers.map((num) => num * 2);
//    console.log(doubled);

//    const total : number = numbers.reduce((acc, cur) => acc + cur);
//    return `${message}${total}`
// }
// const result = sum('The total is: ', 1,2,3,4,5);
// console.log(result);

// //What return type to use when we're not returning anything from a function

// const logSomething = (message: string) : void => {
//     console.log(message);
// }

// // Union Types as Function paramters | Type guard

// const multiplyOrLog = (input: number | string) : void => {
//     if(typeof input === 'number'){
//         console.log(input * 2)
//     } else {
//         console.log(input.toUpperCase()) 
//     }
// }
// multiplyOrLog(3);
// multiplyOrLog('yooo!');


// // Objects as Function Parameters

// function createEmployee({id} : {id: number}) : {
//     id: number;
//     isActive: boolean;
// } {
//     return {id, isActive: id % 2 === 0}
// }
// console.log(createEmployee({id: 1}))
// console.log(createEmployee({id: 2}))

// // alternative

// function createStudent(student: {id: number; name: string}) : void {
//     console.log(`Welcome to the course ${student.name}. Your id is ${student.id}`)
// };

// const newStudent = {
//     id: 1,
//     name: 'James'
// };

// console.log(createStudent(newStudent));

// const processData = (input: string | number, config : {reverse: boolean} = {reverse: false}) : number | string => {
//     if (typeof input === 'number'){
//         return input * input;
//     } else if(typeof input === 'string' && config.reverse === false){
//         return input.toUpperCase();
//     } else {
//         return input.split('').reverse().join('').toUpperCase();
//     }
// }
// console.log(processData('blablabla', {reverse: true}))
// console.log(processData(5, {reverse: true}))
// console.log(processData(5))


// // Type Aliases

// type User = {
//     id: number;
//     name: string;
//     isActive: boolean;
// }

// const user: User = {
//     id: 1,
//     name:'Joe',
//     isActive: false,
// }
// function createUser(user: User) : void {
//     console.log(user);
// }

// // More examples
// type StringOrNum = string | number;
// type Theme = 'light' | 'dark';
// type NumberArray = number[];
// type mixedArray = (number | boolean | string)[];


// // challenge

// type Employee = {
//     id: number;
//     name: string;
//     department: string;
// }
// type Manager = {
//     id: number;
//     name: string;
//     employees: Employee[];
// }
// type Staff = Employee | Manager;
// const alice : Employee = {
//     id: 1,
//     name: 'Alice',
//     department: 'Acconting'
// }
// const steve : Employee = {
//     id: 2,
//     name: 'Steve',
//     department: 'IT'
// }
// const bob : Manager = {
//     id: 1,
//     name: 'Bob',
//     employees: [steve, alice]
// }

// const printStaffDetails = (staff: Staff) : void => {
//     if (staff.employees){
//         console.log(
//             `${staff.name} is a manager. He manages ${staff.employees.length} employees.`
//         )
//     } else {
//         console.log(
//             `${staff.name} is an employee. He belongs to the ${staff.department} department.`
//         )
//     }
// }

// printStaffDetails(bob);

// Intersection types

// type Book = { id: number; name: string; price: number };
// const book1: Book = {
//   id: 2,
//   name: 'How to Cook a Dragon',
//   price: 15,
// };

// const book2: Book = {
//   id: 3,
//   name: 'The Secret Life of Unicorns',
//   price: 18,
// };

// const discountedBook: Book & {discount: number} = {
//   id: 4,
//   name: 'Gnomes vs. Goblins: The Ultimate Guide',
//   price: 25,
//   discount: 0.15,
// };

// Interface - Fundamentals

// - allows to set up the structure/shape of an object (only objects)

// interface Book {
//     readonly isbn: number;
//     title: string;
//     author: string;
//     genre?: string;
// }

// const deepWork : Book = {
//     isbn: 123,
//     title: 'deep work',
//     author: 'Cal Newport',
//     genre: 'self-help'
// }

// deepWork.title = 'New Title'; // allowed
// deepWork.isbn = 654321; // not allowed

// Interface - Methods

// interface Book {
//     readonly isbn: number;
//     title: string;
//     author: string;
//     genre?: string;
//     printAuthor(): void;
//     printTitle(message: string): string;
// }

// const deepWork : Book = {
//     isbn: 123,
//     title: 'deep work',
//     author: 'Cal Newport',
//     genre: 'self-help',
//     printAuthor(){
//         console.log(this.author)
//     },
//     printTitle(message){
//         return `${this.title} ${message}`
//     }
// }

// deepWork.printAuthor();
// const result = deepWork.printTitle('is an awesome book.');
// console.log(result);


// // challenge

// interface Computer {
//     readonly id: number;
//     brand: string;
//     ram: number;
//     storage?: number;
//     upgradeRam: (newRam: number) => number;
// }

// const computer: Computer = {
//     id: 1,
//     brand: 'Dell',
//     ram: 8,
//     upgradeRam: function(newRam){
//         this.ram = newRam
//     }
// }

// computer.upgradeRam(16);
// console.log(computer.ram);


// Interface - Merging, Extend, TypeGuard

// interface Person {
//   name: string;
//   getDetails(): string;
// }

// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// }

// // Merging (reopening) an interface in TypeScript is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.

// // Merging the interface
// interface Person {
//   age: number;
// }

// // Usage
// const person: Person = {
//   name: 'John',
//   age: 30,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
// };

// // Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface. You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.

// // Extending the interface
// interface Employee extends Person {
//   employeeId: number;
// }

// const employee: Employee = {
//   name: 'jane',
//   age: 28,
//   employeeId: 123,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
//   },
// };

// // Interface multiple inheritance
// interface Manager extends Person, DogOwner {
//   managePeople(): void;
// }

// const manager: Manager = {
//   name: 'Bob',
//   age: 35,
//   dogName: 'Rex',
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
//   getDogDetails() {
//     return `Dog Name: ${this.dogName}`;
//   },
//   managePeople() {
//     console.log('Managing people...');
//   },
// };

// challenge - part 1

// interface Person {
//     name: string;
// }

// interface DogOwner extends Person {
//     dogName: string;
// }

// interface Manager extends Person {
//     managePeople: () => void;
//     delegateTasks: () => void;
// }

// const getEmployee = () : Person | DogOwner | Manager => {
//     const randomNumber = Math.random();
//     console.log(randomNumber)
//     if(randomNumber < 0.33){
//         return {name: 'Abass'}
//     } else if(randomNumber > 0.33 && randomNumber < 0.66){
//         return {name: 'Abass', dogName: 'Rex'}
//     } else {
//         return {
//             name: 'Abass',
//             managePeople: function(){
//                 console.log('Managing people')
//             },
//             delegateTasks: function(){
//                 console.log('Delegating tasks')
//             }
//         }
//     }
// }
// const employee: Person | DogOwner | Manager = getEmployee();
// console.log(employee);

// // challenge - part 2

// const isManager = (obj: Person | DogOwner | Manager) : obj is Manager => {
//     return 'delegateTasks' in obj;
// }
// if(isManager(employee)){
//     employee.delegateTasks();
// }

// // challenge

// enum UserRole {
//     Admin,
//     Manager,
//     Employee
// }

// type User = {
//     id: number,
//     name: string,
//     role: UserRole,
//     contact: [string, string],
// }

// function createUser(userObj: User) : User {
//     return userObj;
// }

// const resultUser : User = createUser({id: 1, name: 'abass', role: UserRole.Manager, contact: ['abass12@gmail.com', '09152018480']})
// console.log(resultUser);


// Type gaurding challenge

// type valueType = string | number | boolean;
// const  random = Math.random();
// let  value : valueType = random < 0.33 ? 'hello' : random < 0.66 ? 123.456 : true;

// const checkValue = (value : valueType) : void => {
//     if(typeof value === 'string'){
//         console.log(value.toUpperCase())
//         return
//     } else if(typeof value === 'number'){
//         console.log(value.toFixed(2))
//     } else {
//         console.log(`Boolean: ${value}`);
//     }
// }
// checkValue(value);


// // challenge - truthy/falsy gaurd

// function printLength(str : string | undefined | null) : void {
//     if(str){
//         console.log(str.length)
//     } else {
//         console.log('No string provided')
//     }
// }
// printLength('YOOOO!');


// let eventDate = new Date('September 26, 2025 12:00:00').getTime();
// // Update the countdown every secon
//     let now = new Date().getTime(); // Get the current time
//     let secondsInAday = (60 * 60 * 24)
//     let secondsInAnHour = (60 * 60)
//     let secondsInAMinute = (60)
//     let timeLeft = eventDate - now;
//     timeLeft = timeLeft / 1000;
//     console.log(timeLeft);
//     let days = Math.floor(timeLeft / secondsInAday);
//     let hours = Math.floor((timeLeft % secondsInAday) / secondsInAnHour)
//     let mins = Math.floor(((timeLeft % secondsInAnHour) / secondsInAMinute))
//     console.log(days, hours, mins)

  

// Generics

// function genericFunction<T>(arg: T) : T {
//     return arg;
// }

// const returnString = genericFunction<string>('Hello world!');
// const returnNumber= genericFunction<number>(5);
// console.log(returnString, returnNumber);


// async function someFunc(): Promise<string>{
//     return 'Hello world';
// }
// console.log(someFunc())


// Fetching Data\

// import {z} from "zod";
// const url = 'https://www.course-api.com/react-tours-project';

// const tourSchema = z.object({
//     id: z.string(),
//     name: z.string(),
//     info: z.string(),
//     image: z.string(),
//     price: z.string(),
//     something: z.number()
// })
// type Tour = z.infer<typeof tourSchema>
// type Tour = {
//     id: string;
//     name: string;
//     info: string;
//     image: string;
//     price: string;
// }

// async function fetchData(url: string) : Promise<Tour[]>{
//     try{
//         const response = await fetch(url);
//         if(!response.ok){
//             throw new Error(`Http error! status: ${response.status}`)
//         }
//         const rawData : Tour[] = await response.json();
//         const result = tourSchema.array().safeParse(rawData);
//         if(!result.success){
//             throw new Error(`Invalid data: ${result.error}`)
//         }
//         console.log(result);
//         return result.data;
//     } catch(error) {
//         const errorMsg = error instanceof Error ? error.message : 'There was an error';
//         console.log(errorMsg)
//     }
// }

// fetchData(url);


// Classes

// class  Book {
//     readonly title: string;
//     readonly author: string;
//     private checkedOut: boolean = false;

//     constructor(title: string, author: string) {
//         this.title = title;
//         this.author = author;
//     }
//     public checkOut(){
//         this.checkedOut = this.toggleCheckedOutStatus()
//     };
//     public isCheckedOut(){
//         return this.checkedOut ? true : false;
//     };
//     private toggleCheckedOutStatus(){
//         return !this.checkedOut;
//     };
// }
// const newBook = new Book('Things Fall Apart', 'Chinua Achebe');
// newBook.checkOut()
// console.log(newBook.isCheckedOut())
// console.log(newBook.checkedOut);

// class Book {
//     constructor(
//         readonly author: string,
//         public title: string,
//         private someValue: number
//     ){

//     }
//     public getSomeValue(){
//         return this.someValue;
//     }
// }
// const book = new Book('Things Fall Apart', 'Chinua Achebe', 45)
// console.log(book.getSomeValue())