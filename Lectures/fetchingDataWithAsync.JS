console.log('fetching with async');
// const data = fetch('https://dummyjson.com/quotes')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log("data>>", data);
//         // do what you want with the data
//     }) 

// lets convert the above fetch code and promise chaining with async function using await
async function getData() {
    document.getElementById('loading').style.display = 'flex';
    console.log('getting data');
    const response = await fetch('https://dummyjson.com/quotes'); // await only works inside the async defined function
    if(response.ok){
        document.getElementById('loading').style.display = 'none';
        console.log('response', response);
        const data = await response.json(); // .json() is a function is something that returns a promise
        const quotes = data.quotes;
        const myHtml = quotes.map((item)=>{
            return `
            <div class='quote-box'>
                <h2>${item.id}. ${item.author}</h2>
                <p>${item.quote}</p>
            </div>
            `
        })
        document.getElementById('container').innerHTML = myHtml.join('');
    }
}
getData();

// this makes the code really readable and nice than going through promise chaining
 function showData(data){
    // DOM manipulation can be done here
}


// TODO a loading screen
// you need create the HTML element first, hide it with display none
// once you get the data, make the display none