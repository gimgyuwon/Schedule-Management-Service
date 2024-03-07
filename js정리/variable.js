var calculator = {};

calculator.setNumbers = function(num1, num2) {
    this.number1 = num1;
    this.number2 = num2;
}

calculator.sum = function() {
    return this.number1 + this.number2;
};

calculator.multiply = function() {
    return this.number1 * this.number2;
}

calculator.setNumbers(3,5);
console.log("sum", calculator.sum());
console.log("multi", calculator.multiply());