
var obj1 = {
    name: 'kd',
    age: 21,
    occupation: 'student',
    getInfo: function(){
        return 'info of obj is ' + this.name + ' ' + this.occupation;
    }
}
var obj2 = {
    name: 'll',
    age: 21,
    occupation: 'instructor',
    
}

console.log(obj1.getInfo());
// call apply and bind is used when multiple objects want to share a function

const info2 = function hello(){
    return 'the name of info2 is ' + this.name;
}
// use a common function outside that can be tied to all objects instead of individually writing this code in every object and decreasing code duplication

console.log(info2.call(obj1));
