console.log('oops2');

// 
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

class person {
    constructor()
}