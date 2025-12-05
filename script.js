//call/apply/bind -> ek function mein this ki value window hoti aur agr aap chahte h wo window na ho
//par koi aur object ho tb aap use kr skte h call, apply and bind.

let obj={
    name:"Shrey",
}

function abcd(a,b,c){
    console.log(this,a,b,c);
}
// abcd.call(obj,1,2,3);// runs the function and set the value for this keyword

// abcd.apply(obj,[1,2,3]);// same concept as call but instead of passing values directly we pass it in the form of array

let newfnc=abcd.bind(obj,1,2,3);// same concept, returns a new function doesnt directly call a function
newfnc();

// function-> holds this value, fat arrow function-> takes value from parent
