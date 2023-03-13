
// user inputs a username
// problem statement - create a function called getUserName which returns 
// a promise that gets resolved in 1500 ms and it returns a user object for a username we search for


// real life example
/**
 * API is a collection of URL
 * Every URL shows you different information
 * Some URLS sends and data
 * Promises are used to recieve and send info
 */

// fetch takes a user argument
// fetch('https://dummyjson.com/quotes/1').then((res)=>{
//     log(res.json);
// })

// practice -> I want to create a promise, and do something with the result

// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve('<h1>Promise found</h1>');
//         reject('<h1>Promise not found</h1>');
//     }, 2000)
// })

// console.log(myPromise);
// myPromise.then((data)=>{
//     document.getElementById('container').innerHTML = data;
// }).catch((e)=>{
//     document.getElementById('container').innerHTML = e;
//     document.getElementById('container').style.color = 'red';
// })

// Promise chaining -
function myPromise(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('promise resolved')
        }, 1000);
    })
}

myPromise().then((res)=>{
    console.log('res', res);
})