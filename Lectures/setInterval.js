// set interval is used for calling a function constantly with a time defined

let count = 0;
setInterval(()=> {
    console.log(count++);
}, 1000*60); // every 

// use cases like, lets say you want to show ads every 10 minutes or so.
// it will keep looping at the interval time duration given

// we can use clearInterval and clearTimeout function to stop the interval