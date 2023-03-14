console.log('fetching data');

// API's -> for now an API is a collection of URL's
// A URL is an address for a computer which runs a specific function, its a specific location. When I go to an address, i recieve data, like google.com, it opens google. Its 
// an address of a particular computer
// Internet works the same as the real world postal service
// What is a server? It is a computer or a set of computers
// www.google.com -> google.com is the domain -> you can buy an address,
// every server has a script that runs
// all URLS return data, either data or a HTML page, etc
// A lot of URL's make an API(or atleast now)


// fetch is a method inbuilt provided by browser which returns a promise
// using the fetch which returns a promise, we can handle the promise using then and using the res.json() function
const data = fetch('https://dummyjson.com/quotes/random').then((res)=>res.json()).then((data)=> {
    console.log('data ->>', data);
    document.getElementById('container').innerHTML = `<h1>${data.quote}</h1>`;
});

// get a json in an array and then show it on the DOM
// all apis response can be an array or an object. Make sure you always console.log to check what that API is giving you

// Handling errors
// Having just a single catch at the end of a promise chain will be enough to catch the errors anywhere and it will break the code execution there

