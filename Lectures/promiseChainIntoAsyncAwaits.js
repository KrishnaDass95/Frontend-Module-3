console.log('conversion of promise chains to async awaits');

function takeOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('taking your oder');
            // reject('waiters busy');
        }, 2000)
    })
}
function giveFood(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('delivering your food');
            // reject('sorry, no food');
        }, 2000)
    })
}
function takePayment(){
    setTimeout(()=>{
        console.log('take payment');
    }, 2000); 
}


// promise chaining, Chaining all the promises. with the then keyword, 
// res1 and res2 is what the promise functions are resolving 
// takeOrder().then((res1)=>{  // take order returns a promise
//     console.log('res1', res1);
//     return giveFood();   // give food returns a promise
// }).then((res2)=>{
//     console.log('res2', res2);
//     return takePayment();
// }).catch((err)=>{
//     console.log('error->', err);
// })


// now the code is not running parallely like before,we can stop the flow of the code
// and it will run nicely
// inside the function JS will run synchronously 
async function handleChainOfPromises(){
    console.log('handling..', new Date());
    const res1 = await takeOrder();
    console.log('res1>>', res1, new Date());
    const res2 = await giveFood();
    console.log('res2>>', res2, new Date());
    takePayment();

}
handleChainOfPromises();