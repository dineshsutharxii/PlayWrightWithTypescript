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
    schoolName: string; //regular property
    constructor(studentId: number, name: string, schoolName: string, email?: string){
        this.studentId = studentId;
        this.name = name;
        this.email = email;
    }
    displayInfo() {
        console.log(`Student ID: ${this.studentId}, Name: ${this.name}, Email: ${this.email ?? "Email not provided"}`);
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
