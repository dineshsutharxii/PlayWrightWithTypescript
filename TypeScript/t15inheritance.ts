//inheritance
//A class can reuse the properties and methods of another class
//inheritance is a mechanism where one class can inherit the properties and methods of another class.
//inheritance allows you to reuse the functionality of the existing class without rewriting it.

//A ----- properties + method (parent class/ Base class/ super class)
//B extends A ---- properties+method (Child class/ derived class/Sub class)

class Car {
    name:string
    color:string
    model:string
    constructor(name:string, color:string, model:string){
        this.name=name
        this.color=color
        this.model=model
    }
    start(){
        console.log("Car started......")
    }
    stop(){
        console.log("Car stopped......")
    }
    displayInformation(){
        console.log(`Name: ${this.name}, Color: ${this.color} and Model: ${this.model} `)
    }
}

class Honda extends Car {
    year:number
    constructor(name:string, color:string, model:string, year:number){
        super(name, color, model)
        this.year=year
    }
    //method overriding
    start(){
        console.log("Honda started......")
    }

    yom(){
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, YOM:${this.year}`)
    }
}

let honda = new Honda("Honda", "red", "Honda City", 2024)
console.log("Name : ", honda.name)
console.log("Color :", honda.color)
console.log("Model :", honda.model)
console.log("Years :", honda.year)
honda.start()
honda.yom()


//Parent class variable is holding child class object
let car:Car = new Honda("Honda", "Red", "Honda City", 2024)
car.displayInformation()
car.start()
//car.yom() //not accessible