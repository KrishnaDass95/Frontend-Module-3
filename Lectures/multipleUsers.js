// Problem statement -> when users signup, maintain an array for all users signing up
// as soon as they sign up, take them to profile page
// 


// we have 3 pages, sign up, login and show profile page

// SIGN UP PAGE
// sign up page has email, password and confirm password
// get input and then create a user object
// add this user object with JSON.stringify to local storage
// but first have an array of users and push this object above to it
// if the users array is empty, create empty array
// if not then retrieve the user object and then push this to array

// LOGIN PAGE
// first, the login page needs to get the users page first
// get the values, email and passwrod

// you need to check your local storage, with the login details given
// to see if the email and password match Users array
// var myUser = users.filter((item)=> {item.email == email.value})
// use myUsers object, parse it back and then do validation
// if validation passes, make a current user object and add it to local storage
// navigate to the profiles page.