console.log('oops2');

// Private variable
// you need private variables to hide some variables and also for security of variables
// the best version of software is the one that is compatible with most softwares
class Bank{
    #accountNumber;

    constructor(){
        this.name = 'krishna';
        this.#accountNumber = '100000000'
    }

    #privateMethod(){
        return 'this is a private method'
    }

    getAccountNumber(){
        // return this.#accountNumber; this is bad practice to show the entire account number
        return 'XXXX' + this.#accountNumber.slice(3,8) + 'XXXX' + this.#accountNumber.slice(8,);
        // so you can use public functions to access private variables, never return it as it, 
        //mask it and do some data hiding and then transmit it
    }
}

const myAccount = new Bank();
console.log('accessing it directly gives undefined',myAccount.accountNumber); // undefined
// console.log('accessing using # -> still not allowed', myAccount.#price);
// console.log('private Method',myAccount.privateMethod); // undefined, can't access it as well
console.log('private variable using a public function to retrieve it', myAccount.getAccountNumber()); // this revelas

// google has all your information, they sell this data to the ad companies, so ad companies can target ads for you on websites
// they don't give away PII -> personally identifiable information, something that can uniquely link to you

// if a company shares PII , that's a horrible privacy problem, you can file a case against them

// Inheritence

class Person {
    constructor(name){
        this.name = name;
    }
    // method to return the the name of person
    toString(){
        return `The name of the person is ${this.name}`;
    }
}

class Student extends Person {
    
    constructor(name, id){
        super(name);
        this.id = id;
    }
    //Method to return the students name and ID
    toString(){
        return `the name of student is ${this.name} and id of the student is ${this.id}`;
    }
}

let p1 = new Person('krishna');
console.log('person ',p1.toString());

let s1 = new Student('Anko', 200);
console.log('student with name and id ',s1.toString());

let s2 = new Student('ash');
console.log('student with only name and NO id ', s2.toString());