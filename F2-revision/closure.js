let a = 100;

function x(){
    // let a = 10;
    function y(){
        let a = 1;
        console.log(a);
    }
    return y;
}

let ans = x();
console.log(ans);

// now there's a 1000 lines of code
console.log(ans()); 

