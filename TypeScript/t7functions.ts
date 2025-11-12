/*
//Callback functions
- A callback function is a function that is passed as an argument to another function and gets executed later.
*/
/*
//Example 1:
//main function that takes callback function as a parameter
function greet1(name:string, callback:(message:string) => void){
    console.log(name)
    callback("Hello")
}
//callback function
function showMessage(message:string){
    console.log(message)
}
//calling the function by passing the callback function.
greet1("John", showMessage)

//Ex 2 :
//main function
function sum(a:number, b:number, callback:(result:number)=>void){
    let result = a+b
    callback(result)
}

//callback function
function displayResult(result:number):void{
    console.log(result)
}
sum(10, 30, displayResult)
*/

/*
Overloaded functions
step1 : write a signatures of functions
step2 : implement a function
step3 : calling function
*/

//Ex1 : Different parameter Types (data types)
function getInfo(id:number):string;
function getInfo(name:string): string;

function getInfo(param: number|string):string{
    if(typeof param == "number")
        return (`User Id is ${param}`)
    else
        return (`User Name is ${param}`)
}
console.log(getInfo(101))
console.log(getInfo("John"))

//Ex2 : Different Number of Parameters
function add(a:number, b:number):number
function add(a:number, b:number, c:number):number

function add(a:number, b:number, c?:number):number{
    if (typeof c != "undefined"){
        return a+b+c
    }
    return a+b;
}
console.log(add(10,5))
console.log(add(5,10,15))

//Ex3 : different return types
function processInput(input:string):string
function processInput(input:number):number

function processInput(input: string | number): string | number{
    if (typeof(input) == "string")
        return input.toUpperCase()
    else
        return input*2
}

console.log(processInput(10))
console.log(processInput("Welcome"))