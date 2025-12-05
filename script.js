let Animal=class{//class expression-> no hoisting
    constructor(){
        this.category="Shrey";
        
    }
    func(){}
}
// let obj=new Animal();

//Inheritance-> property by which class can derive variables and functions from another class
//In JavaScript, inheritance is done through 'extends' keyword

class Wolf extends Animal{
    constructor(){
        super();//for inheritance in js, super() is required/must
        this.sound="howl";
        this.color="white";
        this.category="Animal";
    }
}
let wolf=new Wolf();

class Human{
    constructor(){
        this._age="18";//private variable, not actually private but gives a sense of private->its value can be changed
    }
    // func(){ }
    //getters and setters
    set age(val){
        if(val<0){
            console.error("Not");
            return;
        }
        this._age=val;
        return this._age;

    }
    get age(){
        return this._age;
    }
}
let h1=new Human();
h1.age=22;
