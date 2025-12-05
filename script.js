// this-> special keyword in JS which keep changing its value 
//Object->function->method

// global->window
// function->window
// ES5 function inside object->object
// ES6 function inside object->window
// ES5 function inside ES5 function inside object->window
// ES6 function inside ES5 function inside object->object
// inside eventlistener->same guy on which event is added

console.log(this);
function abcd(){
    console.log(this);
}
abcd();
let obj={
    name:"Shrey",
    fnc:function(){
        console.log(this.name);
    }
}
obj.fnc();

let obj2={
    name:"Shrey",
    fnc:()=>{
        console.log(this);
    }
}
obj2.fnc();

let obj3={
    fnc:function(){
        function abcd(){
            console.log(this);
        }
        abcd();
    }
}
obj3.fnc();

let obj4={
    fnc:function(){
        let abcd=()=>{
            console.log(this);
        }
        abcd();
    }
}
obj4.fnc();

let defg=()=>{
    console.log(this);
}
defg();

let h1=document.querySelector("h1");
h1.addEventListener("click",function(){
    console.log(this);
});