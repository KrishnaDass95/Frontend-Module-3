// Time and Tide and JS waits for no one.
console.log('async');
// Handling Promises using Async Await

function myPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Promise has been resolved');
        }, 2000);
    })
}

// lets handle the promise here, we generally use then keyword but lets use 
// the async keyword. Async is a keyword like let and const 

// async means not line by line and synchronously 
// irony, async function but we make it run synchronously for us
async function handlePromise(){
    // handling promise
    console.log('handling promise', new Date());
    // await keyword is asking JS to wait until it returns a promise
    // it will wait as long as the promise is in pending
    // we are making promises go synchronously for us
    // we can control  the execution to go line by line
    const res = await myPromise(); // the await keyword, is able to change the promise state from pending without resolving it with then
    // awaiting for the promise to come
    if(res){ // its nice to add the res in an if condition for extra protection
        console.log('RES>>', res, new Date());
    }
}
handlePromise();