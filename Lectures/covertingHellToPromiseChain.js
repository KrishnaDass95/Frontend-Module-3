// look at callback.js file for the callback syntax
// we can go away from call back hell by using promises and returning promises
// resolve returns something and then also changes the status of the promise 



function takeOrder(){
    // callback == giveFood
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('taking your oder');
            reject('waiters busy');
        }, 1000)
    })
}
function giveFood(){
    // callback == takePayment
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('delivering your food');
            // reject('sorry, no food');
        }, 1000)
    })
}
function takePayment(){
    setTimeout(()=>{
        console.log('take payment');
    }, 1000); 
}


// promise chaining, Chaining all the promises. with the then keyword, 
// res1 and res2 is what the promise functions are resolving 
takeOrder().then((res1)=>{  // take order returns a promise
    console.log('res1', res1);
    return giveFood();   // give food returns a promise
}).then((res2)=>{
    console.log('res2', res2);
    return takePayment();
}).catch((err)=>{
    console.log('error->', err);
})
// in arrow function () => {use return keyword when you have multiple lines of code} , in arrow functions, if you have a simple 
// one line arrow function, you do not need to return
// its better than callback hell as it is more readable, and its not nested, everything happens linearly, one by one.


// catch is amazing, we just need one catch in the promise chaining. so wherever it seems reject, it will catch it and stop the promise
// from executing further.