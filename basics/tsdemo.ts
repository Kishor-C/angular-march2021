class Calculator {
    add(x : number, y : number) {
        let result = x + y;
        console.log("Result = "+result);
    }

    div(x : number, y : number) : number {
        let result : number = x / y;
        return result;
    }
}

let c = new Calculator();
c.add(20, 30); // allows
//c.add("Hello", 30);   // this is an error