let str1:string = "hello this is string with double quote"
let str2:string = 'hello this is string with single quote'
let str3:string = "hello this is string with backtick"

let num:number = 10
console.log("Number is : ", num)
console.log(`Number is ${num}`)

//string methods
let strng:string="Hello, TypeScript"

//1. length
console.log("Length of string: ", strng.length)

//2. toUpperCase() and toLowerCase()
console.log("Upper case: ", strng.toUpperCase())
console.log("Lower case: ", strng.toLowerCase())

//3. charAt(index) and indexOf(string)
console.log("Character at 4th index:", strng.charAt(4))
console.log("Index of Type: ", strng.indexOf("Type"))

//4. substring()
console.log("Sub String is :",strng.substring(0,5))

//5. includes()
console.log("does sting include 'abc' :",strng.includes('abc'))
console.log("does sting include 'TypeScript' :",strng.includes('TypeScript'))

//6. startsWith() and endsWith()
console.log("Start with 'Hello' :", strng.startsWith('Hello'))
console.log("Ends with 'pt' :", strng.endsWith('pt'))
console.log("Ends with 'hel' :", strng.endsWith('hel'))

//7. replace()
//"Hello, TypeScript"
console.log("Replace string :", strng.replace("TypeScript", "World"))

//8. split()
let words:string[] = strng.split(" ")
console.log("After splitting string :", words)

//9. trim(), trimStart(), trimEnd()
strng = "   Welcome to typescript    "
console.log("Original string :", strng)
console.log("trim string :", strng.trim())
console.log("trimstart string :", strng.trimStart())
console.log("trimEnd string :", strng.trimEnd())

//10. concat()
str1 = 'welcome'
str2 = 'to typescript'
str3 = 'and JavaScript'

console.log("After concatination : ", str1.concat(str2))
console.log("After concatination : ", str1.concat(' ', str2, ' ', str3))
console.log("Welcome ".concat("to ").concat("TypeScript"))
