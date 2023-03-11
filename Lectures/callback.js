console.log('callback hello');

// restaurant example has 3 steps -> take order, give food and take payment
// 1 way of doing it is
// function takeOrder(){
//     console.log('taking order');
// }
// function giveFood(){
//     console.log('give food');
// }
// function takePayment(){
//     console.log('take money');
// }

// takeOrder();
// giveFood();
// takePayment();


// in the above way, if one step fails, others still run, we want them to be dependant on each other

function takeOrder(callback){
    // callback == giveFood
    console.log('taking order');
    callback(takePayment);
}
function giveFood(callback){
    // callback == takePayment
    console.log('giving food');
    callback();
}
function takePayment(){
    console.log('taking payment');
}

takeOrder(giveFood);

// callback hell is when you have multiple functions deeply nested within each other and they're super dependant on each other.