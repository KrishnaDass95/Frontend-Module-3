console.log('promise Methods');

let promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('promise1');
    }, 1000)
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('promise2');
    }, 2000)
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('promise3');
    }, 3000)
})

// parallel execution of promises, this will happen in 3 seconds and not 6 because setTimeOut counter
// promise1.then((res1) => console.log('res1', res1));
// promise2.then((res2) => console.log('res2', res2));
// promise3.then((res3) => console.log('res3', res3));


// // this is not promise chain, its like callback hell, they are nested and it runs asynchronousky
// promise1.then((res1) => {
//     console.log('RES1>>', res1, new Date());
//     promise2.then((res2)=>{
//         console.log('RES2>>', res2, new Date());
//     });

// })

// Both cases above will have the  execution run asynchronously



// Lets go through all Promise methods
// Method 1 of PromiseMethods

// In real life we will be handling a lot of promises, above is inefficient
// in FB, when we login, everything loads as FB client is making calls to backend to display all the user info

//PROBLEM Statement -> resolve "ALL" promises and then do something, they are not related but we need all of them to resolve
// all means -> all should resolve or if even one fails then we throw an error

// console.log('starting time ', new Date());
// Promise.all([promise1, promise2, promise3]).then((res)=>{
//     console.log('res', res, new Date());
// }).catch((e)=>{
//     console.log('error', e, new Date());
// }) // this prints an object of all the these three promises


// second promise method - "ANY" -> if any of these promises are resolved, do something
// OH OH, any is whatever is the fastest one resolved, just show that.
console.log('starting time ', new Date());
Promise.any([promise1, promise2, promise3]).then((res)=>{
    console.log('res', res, new Date());
}).catch((e)=>{
    console.log('error', e, new Date());
})
// if all are rejects, we get aggregate ERROR, everything gives an error.
// it will show whatever passes