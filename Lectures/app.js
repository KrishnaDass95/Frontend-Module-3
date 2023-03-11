console.log('you will see hi in 5 seconds');

function sayHelloWorld(){
    console.log('hello world');
}

setTimeout(sayHelloWorld, 5000); // this will let you wait

setTimeout(() =>{
    console.log('hello');

}, 6000);

// synchronous JS is when JS executes code line by line
// Async -> not sync, code runs parallel
// setTimeout is an asyc, makes code run parallely. 

// async is important for code control and optimization 
// when we do data search on google, it takes 2 seconds to show info
// in that duration you can use a setTimeOut function to show a loading bar etc
// until it shows the data, you can make the code async, we will generally use async more
// By default JS is synchronous, we can make it async 

// What is a call back function
// callback function is a function which is passed as an argument to another function

 
//a function called inside a function is the same thing or a function which is passed as a parameter for a function, this is callback functin

// function mainFunc(callbackFunc){
//     console.log('mainFunc');
//     secondFunc();
// }
// function secondFunc(){
//     console.log('secondFunc');
// }
// mainFunc(secondFunc);

