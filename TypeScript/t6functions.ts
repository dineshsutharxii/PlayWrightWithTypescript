/*
Syntax :
function functionName(parameter): returntype
{
    block of code
}
functionName(); //calling the function/invoking the function
*/
/*
//Ex 1 : named function with no parameter and no return type
function display() {
    console.log("named function with no parameter and no return type")
}
display()

//Ex 2 : named function with parameter and return type
function addNumber(x:number, y:number):number {
    console.log("inside named function with parameter and return type")
    return x+y    
}
console.log(addNumber(10, 20))

function subtractNumber(x, y){
    console.log("Inside subtractNumber function")
    return x-y
}
console.log(subtractNumber(15,10))

//Ex 3 : Named function with Rest parameters - same types element
function addNumbers(...nums:number[]){
    let sum = 0
    for(let i = 0; i<nums.length; i++){
        sum += nums[i]
    }
    console.log("sum of numbers : ", sum)
}
addNumbers(10, 50, 40, 100)

//Ex 4 : Named function with Rest parameters - multiple types element
function findelements(...elements:(number | string)[]):number{
    console.log("Inside findelements function")
    return elements.length
}
console.log(findelements(3, "john", 2, 1, "scott"))

//Ex 5 : Named function with Optional Parameters
function displayDetails(id?:number, name?:string, mail?:string){
    console.log("ID: ", id)
    console.log("Name: ", name)
    console.log("Mail: ", mail)
}
displayDetails(123, 'scott', "scott@gmail.com")
displayDetails(143, 'ss',)

//Ex 6 : Named function with Default Parameters
function calculateDiscount(price:number, rate:number=0.50){
    let discount:number = price*rate
    console.log("Discount Rate : ", discount)
}
calculateDiscount(500)
*/

//Anonymous Function(Unnamed Function/Nameless Function)
/*
Function which does not have a name.
Instead, it is assigned to a variable, which acts as its name.
Syntax:
let variable = function(parameter){
    //function body
};

variable(); //calling the function
*/
/*
//Ex 1 : Anonymous function
let msg1 = function(): string{
    return 'Hello TyoeScript'
}
console.log(msg1())

//ex 2 : Anonymous function with parameter
let multiply1 = function(a:number, b:number):number{
    return a+b
}
console.log("multiply :", multiply1(10,20))
*/

////Arrow functions/lambda Function
/*
lambda function refer to anonymous functions
lambda function area a concise mechanism to represent anonymous functions.
These functions are also called as Arrow functions.

There are 3 parts to a lambda function.
1.Parameter - A function may optionally have parameters
2.The fat arrow notation/lambda notation(=>) = It is also called as the goes to operator
3.Statements - represent the functions instrucion set
syntax : 
    let variable = (parameters) =>{
        //block of code
    }
    variable()
*/

//ex1 : arrow function with no parameter and no return type
let greet = () =>{
    console.log("Hello TS")
}
greet()

//Ex2 : arrow function with parameter and a return type
let add = (a:number, b:number):number =>{
    return a+b
}
console.log(add(10,20))

//Ex3 : Arrow function with implicit return
let sub = (a:number, b:number) => a-b
let multiple = (a:number, b:number) => a*b
console.log(sub(20,10))
console.log(multiple(5,4))

//Ex 4 : Arrow function with optional parameter
let displaydetails = (id:number, name?:string) =>{
    console.log("Id :", id)
    console.log("Name :", name)
}
displaydetails(143)

//ex 5 = Arrow function with default parameters
let sum = (a:number=10, b:number= 20) => a+b
console.log("Sum :",sum(30))

//Ex 6 = Arrow function with rest parameters
let findElements = (...elemets:(number | string)[]):number =>{
    return elemets.length;
}
console.log(findElements())