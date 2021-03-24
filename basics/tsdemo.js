var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        var result = x + y;
        console.log("Result = " + result);
    };
    Calculator.prototype.div = function (x, y) {
        var result = x / y;
        return result;
    };
    return Calculator;
}());
var c = new Calculator();
c.add(20, 30); // allows
//c.add("Hello", 30);   // this is an error
