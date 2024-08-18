// 100 Days Of Coding Challenge!

/** Question 63:
Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias,
including properties unique to each shape.*/

//-----------------------------------------------------------------------------------------------------------

// Define a type alias for Circle
type Circle = {
  shape: "circle";
  radius: number;
};

// Define a type alias for Rectangle
type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

// Define a union type alias for Shape
type Shape = Circle | Rectangle;

// Function to describe a shape
function describeShape(shape: Shape): string {
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
const myCircle: Circle = { shape: "circle", radius: 20 };
const myRectangle: Rectangle = { shape: "rectangle", width: 30, height: 45 };

console.log(describeShape(myCircle)); // Output: This is a circle with a radius of 20.
console.log(describeShape(myRectangle)); // Output: This is a rectangle with a width of 30 and a height of 45.
