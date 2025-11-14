//inheritance
//A class can reuse the properties and methods of another class
//inheritance is a mechanism where one class can inherit the properties and methods of another class.
//inheritance allows you to reuse the functionality of the existing class without rewriting it.

//A ----- properties + method (parent class/ Base class/ super class)
//B extends A ---- properties+method (Child class/ derived class/Sub class)

class car {
    name:string
    color:string
    model:string
    constructor(name:string, color:string, model:string){
        this.name=name
        this.color=color
        this.name=model
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

class Honda extends car {
    years:number
    constructor(year:number){
        this.years=year
    }
    start(){
        console.log("Honda started......")
    }
    yom(){
        console.log(`Year of Manufacture : ${this.yom}`)
    }
}