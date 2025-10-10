let number= 10; //Number Data Type

let name= "hania"; //String Data Type

let my_name= "Simra";

let isactive=true; //Boolean Data Type

//To check the Data Type of Variable
// typeof(number)
console.log(typeof number);

console.log('My name is ${my_name}')  //'' Template String

//Types of Data Types in JavaScript
// Primitive & Non Primitive

// Primitive (Single values are stored)
// Number, String, Boolean

// Non Primitive (Mulyiple values are stored)
// Arrays, Objects

let array1= [1, 2, 3, 4, 5];


// Functions in JavaScript (3 Types)
// Named Functions
function info(){
    let name= "simra";
    console.log(name);
}
info();  //Calling or invoking a function
console.log("Hello!");


//Anonymus Functions (Unnamed Functions)
let calculation= function () { // called through Function Expression b/c this function does not have any name so we have store it calculation  variable.
    let num= 4*5;
    console.log(num);
}
calculation();

//Fat arrow function (Modern and short syntax and style to write a function)
let display= () => {
    let text= "Hello I am Simra";
    console.log(text);
}
display();

//Parameterized Function
function info2(text1) {
    console.log(text1);
}
let text1 = "I am a Student of Informaton Technology";
info2(text1);
