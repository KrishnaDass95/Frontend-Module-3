const { resolve } = require("path");

// console.log('promise chaining');
const promiseButton = document.querySelector('#btn');

function PromiseAPI1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const data = fetch('https://dummyjson.com/posts');
            if(data){
                resolve(data);
            }
            else{
                reject('posts data not available')
            }
        }, 1000)
    })


}

function PromiseAPI2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const data = fetch('https://dummyjson.com/products');
            if(data){
                resolve(data);
            }
            else{
                reject('products data not available')
            }
        }, 2000)
    })


}

function PromiseAPI3(){
    return new Promise((resolve, reject)=?{

    })


}



// build the promise chain using async function
function buildPromiseChain(){

}



promiseButton.addEventListener('click', buildPromiseChain);
