// Creating an array with different types of data
let myArray = ["Apple", 25, true, "Banana", false, 99, "Mango", 3.14];
console.log("Original Array:", myArray);

// Adding 2 Boolean values at the end
myArray.push(true, false);
console.log("After Adding 2 Booleans at the End:", myArray);

// Adding 2 String values at the beginning
myArray.unshift("Start1", "Start2");
console.log("After Adding 2 Strings at the Beginning:", myArray);

// Creating another array (copy of the updated array)
let newArray = [...myArray];

// Removing 2 elements from end
newArray.pop();
newArray.pop();

// Remove 2 elements from start
newArray.shift();
newArray.shift();

console.log("New Array after Removing Elements:", newArray);

// Display element at index 4
console.log("Element at index 4:", newArray[4]);

// Display element at index 2
console.log("Element at index 2:", newArray[2]);
