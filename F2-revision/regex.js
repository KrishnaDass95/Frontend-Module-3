console.log('regex');

let text = 'Hammerhead K2 Dashboard';
let n = text.search('K2');
console.log(n); // this returns 11, the first number where the pattern match kicks in

console.log(text.search(/k2/i));
console.log(text.replace(/Hammerhead/gi, 'Karoo'));

console.log(text.replace(/.*mer/gi, 'AAAAAA'));

function printHello(){
    console.log('hello');
}

let callInterval = setInterval(printHello, 2000);


class Hammerhead{
    constructor(deviceName, batteryCapacity){
        this.deviceName = deviceName;
        this.batteryCapacity = batteryCapacity;
    }
    bootUpDevice(){
        console.log(this.deviceName + ' is booting up');
    }
}
const k1 = new Hammerhead('k1', 2000);
const k2 = new Hammerhead('k2', 3000);
k1.bootUpDevice();


clearInterval(callInterval);

// closures - a function along with its lexical binding is a closure
function x(){
    let z = 10;
    function y(){
        console.log(z);
    }
    return y;
}

let closure = x();
closure();

// convert number to string
let num = 200;
const stringNum = num.toString();
console.log(typeof(stringNum));

num = parseInt(stringNum);
console.log(typeof(num));

// number to string is done through, .toString() and string to num is parseInt(num)