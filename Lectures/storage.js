// Problem statement -> Store the information of someone who has 
// logged in, it should be saved if your tab is closed or google chrome and my laptop

const { stringify } = require("querystring");


/** What is storage?
 * Storage, generally why do companies want to track 
 * A company will have big headache if they have to store data like how users are logged in etc
 * Browser takes the headache of knowing which account is logged in to the website
 * Its a general storage , can store whatever it needs to
 *  Sometimes when you disconnect internet, you can work offline,
 * like youtube videos we download, are stored inside the application
 * including the history of a website etc
 * You can ony store strings in local storage
 */

/**
 * What was the need?
 * Pain point to keep logging in, it addictive because its easy to quickly login
 * and use the app. It helps store files and authentication, anything we need
 */

/**
 * There are three types of storages, they have specific use cases
 * Local Storage 
 * Session Storage
 * Cookies
 */

// Mapping of storage is done based on url, for example, every URL of a website gets a storage, stored in key- value pairs
// storage = {
//     'google.com': [data1, data2, data3],
//     'accio.com': [data1, data2, data3],
//     'insta.com': {
//         email : 'kaka',
//         password: 'lll'
//     }
// }


// First step -> Access values from inputs and make login function
// Second step -> In the login function store the value from person X
// third step ->  next time when user comes, show that the person has previously logged in(like laptop or tab closed)

let loginButton = document.getElementById('login_btn');


function login(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    // its annoying to do email , password and many fields
    // we can add that to an object, based on OOPS
    console.log('email entered', email);
    console.log('email entered', password);
    let userObj = {
        userEmail : email,
        userPassword : password
    };
    let userStringify = JSON.stringify(userObj)
    localStorage.setItem('user', userStringify);

    let jsonObject = JSON.parse(userStringify);
    localStorage.getItem('userObj', )


    // logic to save the data, this will store the email and password
    // to the browser using localStorage.setItem
    // this will store all the data. It stores the data as key-value pairs
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    // alert('email and password stored');
    // use localStorage.getItem 
    document.getElementById('emailP').textContent = localStorage.getItem('email');
    window.location.href = './profile.html'
}

loginButton.addEventListener('click', login);
// console.log('local storage email', loca);
if(localStorage.getItem('email') && localStorage.getItem('password')){
    window.location.href = './profile.html'
}

// So technically authentication is stored on local storage
// and then the browser checks that and the script is able to direct you to the pages you need to go


// In real life to handle multiple users, they  add a users array to keep track of multiple users

