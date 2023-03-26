// console.log('revision');
// TODO - Calculator question and the private counter question

// print time every 5 seconds using setInterval
// setInterval(()=>{
//     const time = new Date().toLocaleTimeString();
//     console.log(time);
// }, 5000);

// hoisting -> During code 
// console.log(a);
// var a = 10;
// console.log(add);
// function add(a, b){
//     console.log(a+b);
// }

// OOPS in JS
// let cc = 1000;
// let name = 'honda';
// let color = 'red';
// let manYear = 2022;

// function createCar(cc, name, color, manYear){
//     return{
//         carCC : cc,
//         carName: name,
//         carColor: color,
//         carManYear: manYear
//     }
// }
// const swift = createCar(1000, 'swift', 'red', 2001);
// console.log(swift);

// class Car{
//     constructor(cc, name, color, manYear){
//         this.cc = cc;
//         this.name = name;
//         this.color = color;
//         this.manYear = manYear;
//     }
//     startCar(){
//         console.log(`${this.name} is starting`);
//     }
// }
// let vw = new Car(2999, 'vw', 'silver', 2023);
// vw.startCar();
// console.log(vw.color);

// class Maruti extends Car {
//     constructor(cc, name, color, manYear, carName, specialFeatures) {
//       super(cc, name, color, manYear);
//       this.carName = carName;
//       this.specialFeatures = specialFeatures;
//     }
//   }
  
//   const dzire = new Maruti(1197, 'Maruti Dzire', 'White', 2022, 'Dzire', { safety: 'airbags' });
//   console.log(dzire.specialFeatures); // Output: { safety: 'airbags' }
  
// Closure - A function along with lexical scope and its bindings is known as a closure 

// let a = 10;
// function x(){
//     // let a = 20;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// let xFunc = x();
// xFunc();

// Number to string and vice-versa -> 
// let a = 100;
// let ans = toString(a);
// console.log(typeof(ans));

// // String to number
// ans = parseInt(ans);
// console.log(typeof(ans));



// Arrow Functions -> Shorthand functions to write functions consicely over traditional functions

// let add = (a, b) => a+b;
// console.log(add(22,22));
// In single line functions you don't need  the return keyword, its one liner and concise, the this keyword for traditional functions
// its generally tied to the object where it is called
// const person1 = {
//     name: 'krish',
//     age: 100,
//     greet(){
//         console.log('hello my name is ' + this.name + ' my age is ' + this.age);
//     },
//     hobbies: 'cricket'
// }

// person1.greet();

// const person2 = {
//     name: 'dass',
//     age: 22,
//     greet : ()=>{
//         console.log(this.name + ' ' +  this.age);
//     }
// }
// person2.greet()

// JSON stands for JavaScript Object Notation, its mainly used as a data interchange format between client and server using API's across the internet
// It uses key and value pairs to store and exchange data, its generally a string, it can be a regular object or an array of objects

// const json = '[{"name":"krishna", "age": 30},{"name":"anko", "age": 500}]'
// const jsonObject = JSON.parse(json);
// console.log(typeof(jsonObject));

// const objectToJSON = JSON.stringify(jsonObject);
// console.log(typeof(objectToJSON));

// Higher order functions are functions that functions as argument and returns a function

// function applyOperation(num, operation){
//     return operation(num);
// }
// function square(num){
//     return num * num;
// }
// function cube(num){
//     return num * num * num;
// }`

// console.log(applyOperation(5, square));
// console.log(applyOperation(5, cube));



// Object destructuring - You can store the values of properties by using properties as a variable 

// let person = {
//     name: 'krishna',
//     age: 20,
//     location: 'blore'
// };

// const {location, age} = person;
// console.log(location);
// console.log(age);

// IIFE -> its functions thats invoked right after you write it, its used to keep the function private and keep the scope from clashing

// (function sayHello(){
//     console.log('hello');
// })();


// let arr = [1,2,3,4];
// const doubleArr = arr.map((item)=>{
//     return item * item
// });
// console.log(doubleArr);

// const filteredArray = arr.filter((item) => {
//     if(item % 2 != 0) return item;
// }
// )
// console.log('filtered AArray', filteredArray);

// SPREAD and REST operator JS
//spread operator spreads out the values , useful for combining two arrays and objects into one
// const arr = [1, 2, 3];
// console.log(...arr);
// const string = 'hey kd';
// console.log(...string + ' How are you');
// // use spread to add one array into another
// const brr = [87, 99, 100];
// const ans = [...arr, ...brr]
// console.log(ans);
// const obj1 = {a : '1', b: '2'};
// const obj2 = {c: '3', d: '4'};
// const objAns = {...obj1, ...obj2};
// console.log(objAns);

// // REST operator in JS
// function add(...numbers){
//     return numbers.reduce((acc, item) => acc + item,0);
// }
// console.log(add(22,3,35,6,7,8,8,3,31,2,3,3,44,5,5,6,67));


// convert key to value and value to key
let obj = {
    location: 'blore',
    house: 'indira',
    company : 'demolish',
    age: 100
};

let ansObj = {};
const keys = Object.keys(obj);
keys.forEach((key)=>{
    ansObj[obj[key]] = key;
})

console.log(obj);
console.log(ansObj);