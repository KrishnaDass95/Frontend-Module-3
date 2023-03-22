// function expressions - storing functions in variables

let add = (x,y) => {
    return x+y;
}
console.log('fn expression', add(2,2));

// Array iteration methods, it means going through each item in the array
let arr = [1, 2, 3, 4];
// for each, take the original array and do something
console.log('for each');
arr.forEach((item, index) => {
    console.log(item, index);
})

// map, takes in each value and then do something with it and it can return something
const mapArr = arr.map((item)=>{
    return item * 2;
})
console.log('doubled map array', mapArr);

// filter, take an array and then run a logic on the values and put them back into another array
// find all even values in arr
const evens = arr.filter((item)=>{
    return item % 2 == 0;
})
console.log('even array by using filter method', evens);

// reduce function -> it basically is used to reduce all the values into a single value , like a sum of an array
const finalSumOfArray = arr.reduce((result, item) => {
    return item + result;
}, 0);
console.log('use reduce to get the sum of array', finalSumOfArray);

// some and every function, you can have a condition and then it prints true or false