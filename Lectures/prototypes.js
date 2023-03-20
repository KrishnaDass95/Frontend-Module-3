// two ways of creating user -> using user = {} or class User {}
// IMPORTANT JS is a prototype oriented language -> everything in JS is a prototype

// everything created in JS has a prototype
// What is a prototype? - it is a structure, where, it 
// at the core its an object, a series of prototype chains becomes an object at the end

var myArr = new Array(1,2,3,4);
console.log(myArr); // prototypes.js:8 (4) [1, 2, 3, 4]
 
// you can have array.map, filter etc functions because the array's prototype has a map function
// you can't do object.map 

// you can custom functions to the prototypes of any object in JS
// like your senior developers have already created some functionality that is added to the prototypes
// you don't need to rewrite it
// you can re-write existing JS functions like map etc

Array.prototype.map = function (){
    return 'hello';
}
console.log(myArr.map()); // hello

// you can have handy helper functions that we can add into the prototypes
// so the new guys don't need to re-invent the problem

//  Problem statement, have one object as the parent and one as the child

// prototype chaining
// its like inheritance in OOPS

const parent = {
    name: 'parent',
    speak: function(){
        return 'parental speaking'
    }
}
const child = {
    name: 'child',
    __proto__: parent // child can inherit the parent functions, by using the __proto__
}
console.log(child.speak()); // parental speaking

// 