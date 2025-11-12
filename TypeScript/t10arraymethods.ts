let numbers:number[] = [1, 2, 4, 6, 8, 3]
let fruits:string[] = ["apple", "banana", "orange", "mango"]

console.log("Number Array :", numbers)
console.log("Fruits Array :", fruits)

//length - attribute (Not a method)
console.log("Size of number array :", numbers.length)

//1. push() - add to end
numbers.push(6,7)
console.log("After push() :", numbers)

//2. pop() - removes from end
let lastFruit = fruits.pop()
console.log("After pop : ", fruits)
console.log("Popped fruits is : ", lastFruit)

//3. shift() - Removes the first ele from an array
let felement = fruits.shift()
console.log("Fruits array after shift():", fruits)
console.log("First Element :", felement)

//4. unshift() - add single/multiple element to the beginging of an array
fruits.unshift("kiwi", "pear")
console.log("After unshift() :", fruits)

//5. concat() - combines two or more array
numbers = numbers.concat([8,9], [19])
console.log("After concat() :", numbers)

//6. slice() - Extracts a section of an array
//-starting index starts from zero. -Ending index will be exclusive.
console.log("After slice :", fruits.slice(1,3))

//7. splice() - Adds/removes elements from an array(from anywhere)
//syntax: array.splice(start, deleteCount, item1, ..., itemN)
//ex1 : for removing
let removedElements = fruits.splice(1,2)
console.log("After splice(1, 2) :", fruits)
console.log("Removed Elements : ", removedElements)

//Ex2 : Not removing only Adding elements
fruits.splice(1, 0, 'pineapple', 'grape')
console.log("After splice(1, 0, 'pineapple', 'grape') : ", fruits)

//Ex3 : adding and removing both
fruits.splice(1, 2, "mango", "cherry")
console.log("After splice(1, 2, 'mango', 'cherry')", fruits)

//8. indexOf() - Finds the index of an element, if no element return -1
//Ex1 :
let orangeIndex = fruits.indexOf("orange")
console.log("Index of orange :", orangeIndex)

//Ex2 :
orangeIndex = fruits.indexOf("orange", 2) //check after onlhy 2nd index
console.log("Index of orange :", orangeIndex)


//9. includes() - check if an element exists
//True or False
let isAppleExist = fruits.includes('apple')
console.log("Does fruits include apple ?", isAppleExist)

let isOrangeExists = fruits.includes('orange')
console.log("Does fruits include orange ?", isOrangeExists)

//10. toString() - Converts array to string
console.log("Before toString() :",numbers)
let numbersString = numbers.toString()
console.log("COnverted Array to string :", numbersString)

let myarray:string[] = ['w', 'e', 'l', 'c']
console.log("Original Array :", myarray)

let str:string = myarray.toString()
console.log("Converted string :", str)


// ====forEach(), map(), filter(), reduce(), some(), every() ====
//1. forEach() - Executes a function once for each array element
    // It takes function as a parameter
    // Syntax : array.forEach(dunction(currentValue, index, array))

//Ex 1 : get index of all the fruites along with value.
console.log("Printing fruits along with index ")
fruits.forEach(function(element, index){
    console.log(`${index}, ${element}`)
})

fruits.forEach((element, index)=>{
    console.log(`${index}, ${element}`)
})

//Ex 2 :
fruits.forEach((element)=>{
    console.log(element.toUpperCase())
})

//2. map() - Creates a new array with the result of calling the function on every element of the array
//It takes function as a parameter.
//Returns the same number of elements that we have in original array.
//Syntax: array.map(function(currentValue, index, array){})
let sqnumber = numbers.map(function(element){
    return(element*element)
})
console.log("Squared numbers :", sqnumber)

let doubleValue = numbers.map((element)=> {
    return element*2
})
console.log("Double numbers :", doubleValue)

let doubleElements = numbers.map((element) => element*2) //one liner if you have return stmt inside arrow function 
console.log("Double Elements :", doubleElements)

//3. filter() - create a new array with all the elements that pass/statisfy the function
// It takes function as a parameter
// Returns either same or fewer number of elements compared to original array.

let evenNumbers = numbers.filter((num) => num%2 ==0)
console.log("Even Numbers :", evenNumbers)

//4. reduce() - Applies a function on every element of an array and returns a single value
//syntax: array.reduce(function(accumulator, currentvalue, index, array))

let reduceResult = numbers.reduce((total, element) =>{
    return (total+element)
})
console.log("Sum of elements in Array :", reduceResult)


//5. some() - Checks if any element satisfies a condition
    //Return true if at least one element passes the condition, else false
    //Syntax : array.some(function(currentValue, index, array){})

//Ex1 : Check array contains negative values
let hasNegative = numbers.some((element) => element<0);
console.log("DOes array contians negatives ? ", hasNegative)

//6. every() - Check if all elements satisfy a condition
//Return true if all elements pass the condition, else false
//Syntax : array.every(function(currentValue, index, array){})
//Ex1 : 
let allEven = numbers.every((element) => element%2==0)
console.log("All even number : ", allEven)

//Ex2 :
let allGreaterthanOne = numbers.every((element) =>element>=1)
console.log("All Greater Than one number : ", allGreaterthanOne)

//Ex3 :
let allPositive = numbers.every((element) => element>0)
console.log("All positive number : ", allPositive)
