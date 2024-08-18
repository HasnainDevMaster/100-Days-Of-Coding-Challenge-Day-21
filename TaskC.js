"use strict";
// 100 Days Of Coding Challenge!
// Function to describe a shape
function describeShape(shape) {
    switch (shape.shape) {
        case "circle":
            return `This is a circle with a radius of ${shape.radius}.`;
        case "rectangle":
            return `This is a rectangle with a width of ${shape.width} and a height of ${shape.height}.`;
        default:
            return "Unknown shape.";
    }
}
// Create instances of Circle and Rectangle
const myCircle = { shape: "circle", radius: 20 };
const myRectangle = { shape: "rectangle", width: 30, height: 45 };
console.log(describeShape(myCircle)); // Output: This is a circle with a radius of 20.
console.log(describeShape(myRectangle)); // Output: This is a rectangle with a width of 30 and a height of 45.
