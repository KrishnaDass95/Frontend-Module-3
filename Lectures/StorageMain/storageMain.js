// Save the 30 quotes in local storage
// if quotes exist, do not fetch, show data from local storage

if(localStorage.getItem('quotes')){
    console.log('from local storage', localStorage.getItem('quotes'));
    let quotes = JSON.parse(localStorage.getItem('quotes'));
    showData(quotes);
}
else{
    fetch("https://dummyjson.com/quotes")
    .then((res)=> res.json())
    .then((data) => {
        console.log('data from fetching', data);
        localStorage.setItem('quotes', JSON.stringify(data));
        showData(data);
    })
}
function showData(data){
    var myOl = document.getElementById('quotes-id');
        data.quotes.map((quote) => {
            var listItem = document.createElement('li');
            listItem.innerHTML = `${quote.quote}`;
            myOl.appendChild(listItem);
        })
}

// jwt.io -> JSON web token
//  whenever you login, you create a token
// encryption -> take the word hi and make  it `akjskdjadjadjaj` but when you decrypt it becomes `hi`;


/**
 * companies stores a token in your local storage
 * only you can 
 * Make user object when you login, use JWT to get a token
 *  then store the JWT in the local storage
 */


// Session storages, a session is when you have a connection with a server, it stays on till the tab is open
// everytime you create a new tab its a new session

// for example, a banking and booking website always uses session storage
// so when you open a new tab, the data goes away

// Cookies -> syntax for getting cookie
console.log(document.cookie);
// they are stored as key value pairs and are separated by ;

// adding cookies to array
let cookieArray = document.cookie.split('; ');
console.log(cookieArray);

// Setting cookies
document.cookie = 'username=kaydeee95';
console.log('updated cookies', document.cookie);