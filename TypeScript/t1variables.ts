// variable: container which can hold/store some data.
// var, let, const
// syntax : keyword variableName:datatype(optional) = value
// Ex : var age:number = 30
//        var age = 40

// var age = 30;
// console.log(age)

//Example 1: var(functional Scope)
// function varScope()
// {
//     if(true)
//     {
//         var msg = 'Hello world from var type'
//         console.log(msg)
//     }
//     console.log(msg)
// }
// varScope()

// //Example 2: let and const (block Scope)
// function letandconstScope()
// {
//     if(true)
//     {
//         let msg_l = 'Hello world from let type'
//         const msg_c = 'Hello world from const type'
//         console.log(msg_l)
//         console.log(msg_c)
//     }
//     // console.log(msg_l) // won't work bcz of block scope
//     // console.log(msg_c) // won't work bcz of block scope

// }
// letandconstScope()

//Hoisting : accessing variable before declaration. 
// console.log(age)
// var age = 30;  // only works with var type
// console.log(age)

// console.log(name_)
// let name_ = 'dipak';  // throw error bcz of let
// console.log(name_)

// console.log(name_)
// const name_ = 'dipak';  // throw error bcz of const
// console.log(name_)