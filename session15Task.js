//Fat Arrow Function
const areaArrow = () => {
    let length = 10;
    let width = 5;
    let area = length * width;
    console.log("Area of rectangle using Fat Arrow Function is: " + area);
}
areaArrow();


//Named Function
function areaNamed() {
    let length = 15;
    let width = 10;
    let area = length * width;
    console.log("Area using Named Function is: " + area);
}
areaNamed();


//Anonymous Function
const areaAnonymous = function() {
    let length = 25;
    let width = 20;
    let area = length * width;
    console.log("Area using Anonymous Function is: " + area);
}
areaAnonymous();