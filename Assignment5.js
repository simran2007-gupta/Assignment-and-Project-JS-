function calculateArea(length = 5, width = 4) {
    return length * width;
}

const calculateAreaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${calculateArea()}`);
console.log(`Arrow Function Area (Custom 10x3): ${calculateAreaArrow(10, 3)}`);

function scopeDemo() {
    var functionVar = "I'm function-scoped";

    if (true) {
        let blockVar = "I'm block-scoped";
        const blockConst = "Me too";
        var leakyVar = "var ignores block scope";
    }

    console.log(leakyVar);
    console.log(blockVar);
}

try {
    scopeDemo();
} catch (error) {
    console.log(`Scope Test Error: ${error.name}: ${error.message}`);
}

try {
    console.log(functionVar);
} catch (error) {
    console.log(`Function Scope Error: ${error.name}: ${error.message}`);
}