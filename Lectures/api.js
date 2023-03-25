// API -> Application Programming Interface
/**
 * Interface means interact with it. Application means, it performs a specific function through software
 * Laymen terms -> interacting with a software function that solves a problem
 * A url has an address, that URL has a script to do some function
 * Behind every URL there's an intention, 
 * INSTA Do you want GET post, POST a post, DELETE post, or UPDATE a post
 * You need to pay companies to get a URL service
 * Any URL by default, the method or task is to GET data
 * DAMN everything on the internet works on URLs and sending data through API's
 * Like on insta, through a URL you can do CRUD operations regarding all your posts
 * 
 */

// console.log('api');
// // fetch(url, header)
// const url = "https://dummyjson.com/quotes/random";
// const headers = {method: 'GET'};
// fetch(url, headers) 
//     .then((res) => {
//         console.log('res', res);
//         return res.json() // json is a function of the response object. Response is a class, res.json() like res.map()
//     })
//     .then(data => {
//         console.log(data);
//     })

// every company has a problem statement that its solving
// request response structure
/**
 * User to server -> request, client sends a request package to server
 * Server to User -> response, server sends a response package to client
 *  Response object = response package -> status, ok, url, 
 *  Request object = request package
 *  network tab helps monitor all the calls going through the network
 * every request and response have headers, headers -> additional information with the request 
 * the headers has a content- type -> the content type can send JSON, HTML etc, whatever you need
 * 
 */


/**
 * CRUD operatios -> every app does CRUD operations
 * fetch allows me to send a request package to a server
 */
const url = 'https://dummyjson.com/products/add';
const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, // we are sending json data
    body: JSON.stringify({ // json object as a 
      title: 'BMW Pencil',
      /* other product data */
    })
  }
fetch(url, options)
.then(res => res.json())
.then(console.log);

// request package - header and body


// server knows four things -> URL it needs to hit, intention, content-type and the body
// payload is the body -> 
// Put and patch has a difference, put will replace everything, but patch will keep the data around and only change the one you need to

// API methods -> get, put, delete, post
// each URL script or backend can do is the above methods
// it'll see what your're sending and then accordingly and then backend logic will determine and give you appropriate response.


// status -> everytime you send a response, there's a status
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// API's are something that has a function it performs which we can use and have an interface, interface means


/***
 * Query Parameter
 * www.google.com/search?
 * search is a directory, we go into google servers with search 
 * ? -> question mark means we're in the same directory and we're doing a query parameter
 * window.location.href gives the current URL
 * you need to pass the above to a URL object
 * The URL object has a method searchParams.get('q') -> 
 * The above method gets you the query parameter of what people are searching for
 * https://www.google.com/search?q=cats& -> google search for cats with a q parameter
 * Problem statement is to pass variables inside URLS so we can access it in our code. 
 */