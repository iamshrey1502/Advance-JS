// class Bottle{//class kyu banahye-> hrr baar ek naya object bnane ke liye
//     constructor(){//automatic function that runs bydefault
//         this.color="blue";
//         this.material="plastic",
//         this.price="132"
//     }
//     fill(){ }
//     drink(){ }
// }


// let bottle1=new Bottle();
// console.log(bottle1);

// let bottle2=new Bottle();
// console.log(bottle2);

//prototypes-> shared memory
class Sketch{
    constructor(){// no multiple constructors inside one class, only single constructor 
        this.character="Doraemon";
        this.color="blue";
    }
    // speak() { }
    // walk() { }//like this bydefault methods outside constructor are added inside shared memory
}

Sketch.prototype.speak=function(){};//these two functions are automatically added in every object from this class
Sketch.prototype.walk=function(){};//these two functions are in the shared memory

let sketch1=new Sketch();
console.log(sketch1);