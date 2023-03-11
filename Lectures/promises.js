// what is a promise?
// in google, when searching for something, it tells the google servers we need cats and dogs
// servers always give us a promise, in the future it returns something. It returns a promise
// when things aren't in our control in front end, we can make requests hoping that the server keeps its promises and returns something

// Only three outcomes, either you receive what you are promised after sometime or you don't get it at all
// the third outcome is, you can get some other unexpected output as a promise.


// all promise has 3 states -> 
// 1. pending 
// 2. resolved/fulfilled( when you get garbage value, you can filter the data)
// 3. rejected

const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        //resolve("<h1>HELLLOOOO</h1>");
        reject('we could not find the data')
    }, 2000)
        // resolve and reject are almost the same thing. You get what you need and you can resolve or reject the data
});
console.log(myPromise); // by default, a pr

// handling the promise, then is a keyword for success state, when it recieves a data
myPromise.then((data) =>{ // then can either take resolve or reject
    console.log("data is", data);
    // show the data on UI
    document.getElementById('container').innerHTML = data;
}).catch((e)=>{ // if we don't catch it, it creates an error
    console.log('requet has been rejected');
    document.getElementById('container').innerHTML = e; // printing the error on the website
})

// if we don't catch it, then it gives an uncaught exception

// promises is a proxy for a value not necessarily known, its just holding a proxy till it gets the value. It indefinitely waits for a response. 
// as soon as we search, it goes to pending state, neither fulfilled nor rejected
// then you can have fullfilled or rejected
// promises are always waiting for a response, does not have its default timeout.


// resolve means -> return whatever is inside brackets, change state from pending to fulfilled
// reject means -> return whatever is inside brackets, change state from pending to rejected
