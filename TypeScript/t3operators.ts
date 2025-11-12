let a:number=10, b:number=20, fname:string="hello"

//Arithmetic operation
console.log("----- Arithmetic operators -----")
console.log("a+b : ", a+b)
console.log("a-b : ", a-b)
console.log("a*b : ", a*b)
console.log("a/b : ", a/b)
console.log("a%b : ", a%b)

//Assignment operators
a = 10
b = 5
console.log("----- After assignment operators -----")
console.log("a+b : ", a+=b)
console.log("a-b : ", a-=b)
console.log("a*b : ", a*=b)
console.log("a/b : ", a/=b)
console.log("a%b : ", a%=b)

//Relational operator
a = 10
b = 20

console.log("----- Relational operators -----")
console.log(a>b)
console.log(a<b)
console.log(a<=b)
console.log(a>=b)
console.log(a==b)
console.log(a!=b)
console.log('10' === '10') //value and type of ele

//Logical operation (&& || !)
let isthat:boolean = true
console.log("----- Logical operators -----")
console.log(20>10 && 30>40)
console.log(20>10 || 30>40)
console.log(!isthat)

//ternary/conditional operator (_?_:_)
//exp ? res1 : res2
console.log("----- ternary operators -----")
let n1:number = 100, n2:number = 200
let res = (n1>n2)?n1:n2
console.log(res)

