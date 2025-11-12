/*
Tuples in TypeScript:
*A tuple is a fixed length array where each element has a specific type.
*It helps in storing multiple fields of differernt data types together.
*/

//Ex 1: tuple with 2 value
let person:[string,number] = ["John", 101]
console.log(person[0])
console.log(person[1])

//Ex 2: Tuple with multiple values
let user:[number, string, boolean, number, string] = [10, 'john', true, 10, 'hello']
console.log(user)

//Ex 3: Iterating over a tuple using a traditional for loop
console.log("..... Using for loop .....")
for(let i=0; i<user.length; i++){
    console.log(user[i])
}

//Ex 4: using a 'for....in'
console.log("..... Using for..in loop .....")
for(let i in user){
    console.log(user[i])
}

//Ex 5: using a 'for....of'
console.log("..... Using for..of loop .....")
for(let ele of user){
    console.log(ele)
}

//Ex 6: Tuple Array (array of tuples)
console.log("..... (array of tuples) .....")
let student:[number,string][] = [[101, "John"], [102, "peter"]]
for(let i=0; i<student.length; i++){
    console.log(student[i])
}