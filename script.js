// class User{
//     constructor(){
//         this.name="test";
//         this.email="test@test.com"
//     }
//     print(){
//         console.log("User logged in");
//     }
// }

// let user1=new User();
// console.log(user1);
// let user2=new User();
// console.log(user2);

// user1.print();
// user2.print();

// class Product{
//     constructor(){
//         this.price=3300;
//         this.name="cap";
//         this.discountedPrice=function(){
//             return this.price-200;
//         }
//     }

// }
// let prod=new Product();
// let cost=prod.discountedPrice();
// console.log(cost);

// class Car{
//     constructor(brand,speed){
//         this.brand=brand;
//         this.speed=speed;
//     }
//     drive(){
//         console.log(`${this.brand} & ${this.speed}`);
//     }
// }

// let c1=new Car("Audi",200);
// let c2=new Car("BMW",250);
// console.log(c1.drive());
// console.log(c2.drive());

// class Student{
//     constructor(name,rollno){
//         this.name=name;
//         this.rollno=rollno;
//         this.introduce=function(){
//             console.log(`${this.name} & ${this.rollno}`);
//         }
//     }
//     // introduce(){
//     //     console.log(`${this.name} & ${this.rollno}`);
//     // }
// }
// let s1=new Student("test",21);
// s1.introduce(); 

// let obj={
//     fnc:function(){
//         console.log(this);
//     },
//     arr:()=>{
//         console.log(this);
//     }
// }
// obj.fnc();
// obj.arr();

//bina class ke bhi constructor function bnta h
//es6 se phle constructor function aise bnta tha

// function Animal(){
//     this.name="test";
//     // this.print=function(){
//     //     console.log(this.name);
//     // }
// }
// let a1=new Animal();

// Animal.prototype.print=function(){
//     console.log(this.name);
// }
// a1.print();

// function User(){//tricky one
//     this.name="test"
//     this.print=function(){
//         console.log("printed");
//     }
// }
// let user1=new User();
// let user2=new User();
// // User.prototype.print=function(){
// //     console.log("printed");
// // }
// if(user1.print===user2.print){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

let obj={
    name:"test",
    email:"test@test.com",
}
function abcd(){
    console.log(this.name);
}
// abcd.call(obj);
// abcd.apply(obj);
let newfnc=abcd.bind(obj);
newfnc();
