/*
Array
- An array is a special type of variable that stores multiple values.
- The values can of same data type or different data types.
- Arrays are declared using '[]' or the generic 'Array<T>' type.
- Indexing starts from 0.
- Arrays are an ordered collection of elements.
*/

//Approach 1 : using leteral
/*
let names:string[] = [] //Declaration
//Initilization/assigning values
names[0] = "John"
names[1] = "Smith"
names[2] = "Peter"
names[3] = "Scott"
*/
let names:string[] = ["john", "Smith", "Peter", "Scott"] //declarartion+initislization
console.log(names)

//Approach 2 : Using the generic Array<T> type
let empNames:Array<string> = ["john", "Smith", "Peter", "Scott"]
let empIds:Array<number> = [100, 101, 103, 104]
let data:Array<string | number> = ["john", 100, "Smith", 101, "Peter", 102, "Scott", 103]
let mixedData:Array<any> = [1, "john", true, null]

//Operation on Arrays
//Ex 1: Iterating over an array using a traditional for loop.
// console.log(empNames.length)
console.log("Employee Name .....")
for(let i = 0; i<empNames.length; i++){
    console.log(empNames[i])
}

//Ex 2: Iterating using the 'for....in' loop(indexes)
console.log("Employee Ids .....")
for(let i in empIds)
    console.log(empIds[i])

//Ex 3: Iterating using the 'for....of' loop (values)
console.log("Mixed Data .....")
for(let value of data)
    console.log(value)

//Ex 4: passing array to the function
function search(ele:number, arr:number[]) {
    for(let val of arr){
        if(val == ele)
            return true
    }
    return false
}
console.log(search(5, [4,6,2,5,2,9]))

//Ex 5 : A function takes an Array and return an array
function CapitalizedWord(arr:string[]) {
    for(let i = 0; i<arr.length; i++){
        arr[i] = arr[i].toUpperCase()
    }
    return arr
}

console.log(CapitalizedWord(['hello', 'world', 'abc']))