//object - object contains properties and behaviors
//object contains variables and methods
// object is collection of key value pairs

//Different ways to create object
//1. using 'object' type - Directly define the values for variable
//2. Inline Type Object - we also define the datatype of the keys
//3. using type alias
//4. using the classes

//1. using 'object' type - Directly define the values for variable
//The typeScript 'object' type represents all non-primitive types.

let employee = {
    name: "John", 
    age: 30, 
    salary: 50000,
    job:"Engineer",
getDetails: function() {
    return `${this.name}, ${this.age} years old, works as a ${this.job} with a salary of $${this.salary}.`;
}
};
console.log(typeof employee); //object
console.log("Employee Object:", employee);

 //accessing object - approach 1(using . notation)
console.log("Employee Name:", employee.name);
console.log("Employee Details:", employee.getDetails());

 //accessing object - approach 2(using [""] notation)
console.log("Employee Age:", employee["age"], employee["job"]);
console.log("Employee details:", employee["getDetails"]()); 

//Modifying object values
employee.salary = 55000;
employee["job"] = "Senior Engineer";
console.log("Updated Employee Details:", employee.getDetails());

//2. Inline Type Object - we also define the datatype of the keys
let student: {name: string; age: number; grade: string; getInfo: () => string} = {
    name: "Alice",
    age: 20,
    grade: "A",
    getInfo: function() {
        return `${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
};
console.log("Student Object:", student);
console.log("Student Info:", student.getInfo());

//3. using type alias
type Car = {
    make: string;
    model: string;
    year: number;
    getCarInfo: () => string;
};
let myCar: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    getCarInfo: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};
console.log("Car Object:", myCar);
console.log("Car Info:", myCar.getCarInfo());

//4. using the classes
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getPersonInfo(): string {
        return `${this.name} is ${this.age} years old.`;
    }
}
let person1 = new Person("Bob", 25);
console.log("Person Object:", person1);
console.log("Person Info:", person1.getPersonInfo());

