/*
1. class
2. real only properties
3. optional properties
4. static properties (variables and methods)
*/

class Student{
    readonly studentId: number; //Readonly property
    name: string; //regular property
    email?: string; //optional property
    // schoolName: string; //regular property
    static schoolType: string = "High School"; //static property
    constructor(studentId: number, name: string, schoolName: string, email?: string){
        this.studentId = studentId;
        this.name = name;
        this.email = email;
    }
    displayInfo() {
        console.log(`Student ID: ${this.studentId}, Name: ${this.name}, Email: ${this.email ?? "Email not provided"}`);
    }
    static ChangeSchoolName(newType: string){
        Student.schoolType = newType;
    }
}

//Usage
let s1 = new Student(101, "john", "HSC", "john@gmail.com")
let s2 = new Student(102, "Jane", "SSC")

console.log("Student 1 Info:")
s1.displayInfo()
console.log("Student 2 Info:");
s2.displayInfo()

//modifying readonly property will cause error
// s1.studentId = 201; //Error: Cannot assign to 'studentId' because it is a read-only property.


//static properties (variables and methods)
/* 1. Static properties and methods are common/shared specific instance of the class.
    2. They can be accessed using the class name without creating an instance of the class.
    3. Static members are often used for utility functions or constants that are relevant to the class as a whole rather than to any specific object. 
    4. static properties and methods can be modified using any object of the class.
*/
console.log("School Type (accessed using class name):", Student.schoolType);
Student.ChangeSchoolName("Secondary School");
console.log("Updated School Type (accessed using class name):", Student.schoolType);
console.log("Accessing static property using object s1:", s1.constructor['schoolType']);
console.log("Accessing static property using object s2:", s2.constructor['schoolType']);
s1.constructor['ChangeSchoolName']("International School");
console.log("Updated School Type (accessed using class name):", Student.schoolType);