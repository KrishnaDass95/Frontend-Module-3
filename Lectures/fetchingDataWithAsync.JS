console.log('fetching with async');
// const data = fetch('https://dummyjson.com/quotes')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log("data>>", data);
//         // do what you want with the data
//     }) 

// lets convert the above fetch code and promise chaining with async function using await
async function getData() {
    console.log('getting data');
    const response = await fetch('https://dummyjson.com/quotes'); // await only works inside the async defined function
    if(response.ok){
        console.log('response', response);
        const data = await response.json(); // .json() is a function is something that returns a promise
        console.log('data', data);
        showData(data)
    }
}
getData();

// this makes the code really readable and nice than going through promise chaining
 function showData(data){
    // DOM manipulation can be done here
}
