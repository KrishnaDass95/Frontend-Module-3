
// constructor functions are used to create empty objects which have some pre-defined properties
// so you can quickly create objects, its done by using Pascal case and the this keyword which will refer to the object being created 
// by the constructor function

function Circle(radius){
    this.radius = radius;
    this.draw = () => {
        console.log('drawing a radius of ' + this.radius);
    }
}
const myCircle = new Circle(49);
myCircle.draw();


// Factory functions
function createCircle(radius){
    return {
        radius,
        draw: function() {
            console.log('drawing a radius of a factory function',  this.radius);
        }
    }
}

const myCircle2 = createCircle(22);
console.log(myCircle2);
myCircle2.draw();