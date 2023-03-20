console.log('OOPS');
// Object oriented programming, an object is an instance of a class
// a class enapsulates , a language which is oriented to OOPS has 4 principles -> encapsulation, abstraction, inheritance and polymorphism


// Way 1 of storing data for a user
// var user_1_name = 'kd';
// var user_1_email = 'kk@lald.com';
// var user_1_phone = '12330000';
// var user_1_username = 'kd_29';
// var user_1_password = 'asddad' // passwords are encrypted 
// messages on whatsapp are encrypted, the messages sent is converted into something so they can't spy on us


// the above is for one user, i need to keep repeating this for multiple users
// our task is to write code cleanly, and efficiently. 
// challenges -> not scalabale, if you want to change or add a parameter, you have to change everywhere
// not uniform
// everything that's made 

// another way to make objects, lot of ways to do a task, way 2
var user1  = {
    name: 'kd',
    email: 'krishna@sadas..com',
    phone: '09919192',
    username: 'kd',
    password: '123'
}
console.log('user1>>', user1);

// another way of doing it, this is better than above , Way 3
// also known as a factory function apparently
function CreateUser(myName, myEmail, myPhone, myUsername, myPassword){
    return {
        name: myName,
        email: myEmail,
        phone: myPhone,
        username: myUsername,
        password: myPassword
    }
}

var user2 = CreateUser('kd', 'email','2121', 'kdkdd', 'asdaddsda');
console.log('user2>>', user2);

// Fourth and best way to do it

class User {
    constructor(myName, myEmail, myPhone, myUsername, myPassword){
        // this refers to current object
        this.name=myName,
        this.email=myEmail,
        this.phone=myPhone,
        this.username=myUsername,
        this.password=myPassword
    }
}

var user3 = new User('kd', 'email','2121', 'kdkdd', 'asdaddsda');
console.log('user3>>>', user3);

// user1 and user2 are regular objects but user3 is an object of User class, this object has a name or object of type User

class Dog{
    constructor(breed, color, height){
        this.breed = breed;
        this.color = color;
        this.height = height;
    }
    // IMP -> INSIDE CLASSES, THE FUNCTION NAMES DO NOT NEED FUNCTION KEYWORD 
    giveDetails(){
        return `the breed of the dog is ${this.breed} and the color is ${this.color}`
    }
}

let billy = new Dog('beagle', 'brown', '200ft');
// property of billly can be the variables and the function , like console the oject, you can see the property value paors
console.log('billy property>>', billy.breed);
// functions of dog
console.log(billy.giveDetails());

//lets log the object of dog billy
console.log('billy object of class dog>>', billy);














