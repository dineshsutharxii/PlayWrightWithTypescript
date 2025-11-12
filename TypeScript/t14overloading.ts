//Method overloading and constructors overloading in TypeScript

class Calculator {

    //constructot overloading
    constructor(); //default constructor
    constructor(a:number, b:number); //parameterized constructor

    constructor(a?:number, b?:number) {
        if (a !== undefined && b !== undefined) {
            console.log(`Sum from constructor: ${a + b}`);
        } else {    
            console.log("Default Constructor called");
        }
    }

    //method overloading
    add(a: number, b: number): number; //signature 1
    add(a: number, b: number, c: number): number; //signature 3
    add(a: string, b: string): string; //signature 2
    add(a: any, b: any, c?: any): any {
        console.log(a + b + (c ? c : 0));
    }
}

let cal1 = new Calculator(); //calls default constructor
let cal2 = new Calculator(5, 10); //calls parameterized constructor
cal1.add(2, 3); //calls number addition
cal1.add("Hello, ", "World!"); //calls string concatenation
cal1.add(2, 3, 4); //calls three number addition
