// Write a function that accepts base (decimal),
//  height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
function areaShape(base, height, shape) {
    if (shape === "triangle") {
       return 0.5 * base * height;
    }
    else if (shape === "parallelogram") {
       return base * height;
    }
    else {
        return "shape not supported";
    }
}
console.log( areaShape(2,3,"triangle"));
console.log( areaShape(8,6,"parallelogram"));
