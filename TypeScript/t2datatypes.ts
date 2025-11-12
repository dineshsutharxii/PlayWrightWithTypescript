/* 
1) Premitive data types (Built-in)
number
string
boolean
null
undefined
any
union type
void

2) Non-Premitive data types (Objects)
Array
Class
Function
Interface
Tuple etc

*/

/*
// 1) Number
let age:number = 25
let price = 25.5
let big = 6546545646546

console.log("Age : ", age)
console.log("Price : ", price)
console.log("big : ", big)
console.log(typeof(age))

*/
/*
// 2) String ('', "", ``)
let fname:string = 'john'
let lname:string = "kane"
let greet:string = `hello`

console.log(greet, fname, lname)
console.log(`Hey ${greet} ${fname} ${lname}`)
*/

/*
// 3) Boolean (true/false)
let isStudent:boolean = true
console.log("Is Student? ", isStudent)

// 4) null and undefined (for absebce of variable)
let emptyvalue: null = null
let notAssigend: undefined = undefined
console.log(emptyvalue)
console.log(notAssigend)
*/

/*
// 5) any type
let value:any = 'welcome'
console.log(typeof(value))
value = 100
console.log(typeof(value))
value = true
console.log(typeof(value))
console.log(value)
*/

/*
// 6) union type (combined multiple type)
let id: number | string | boolean
console.log(id)
id = 'ABC123'
console.log(id)
id = 456321
console.log(id)
id = true
console.log(id)
id = null // not valid
*/
