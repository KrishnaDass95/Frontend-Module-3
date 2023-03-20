// getters have two functionality, it cannot have a parameter, it can 
//  first take some private variables and then show information to users
// mainly its to manipulate some data and show it to the user
// use get keyword before the function
// you don't need to call a getter or a setter function, it can just be accessed like a property


// setters 

class User {
    constructor(myName, myEmail, myPhone, myUsername, myPassword){
        // this refers to current object
        this.name=myName,
        this.email=myEmail,
        this.phone=myPhone,
        this.username=myUsername,
        this.password=myPassword
    }
    get getName(){  // adding a get keyword to make it a getter function
        return 'Mr. ' + this.name.slice(0,1).toUpperCase() + this.name.slice(1);
    // point of getters and setters is , we want to show information to users in a specific manner
    // its like you 
    }
    set setHobbies(hobby){
        this.hobby = hobby.slice(0,1).toUpperCase() + hobby.slice(1); 
    }
}

let user1 = new User('krishna', 'email','2121', 'kdkdd', 'asdaddsda');
console.log(user1.getName);
user1.setHobbies = 'guitar playing';
console.log(user1.setHobbies);


