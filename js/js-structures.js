'use strict';
console.log('js-structures connected.');


// Declare Global Variables
// Declare Constructor functions - name should be capitalized!
// Declare prototype methods
// Declare regular functions
// Add event listeners
// Call functions


//declare global variables at the top of your file
const globalVariable1 = 'Hello';
// const globalVariable2 = [0,1,2];

//create an instance of PersonConstructor and save it to the sam variable
//note that we can do this before the constructor function declaration

function PersonConstructor(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}


//now = sam = { firstName: 'Sam', lastName: 'Ham }
const sam = new PersonConstructor('Sam','Ham');
// console.log(sam);



PersonConstructor.prototype.sayHello = function(){
  // console.log('Hello, my name is ' + this.firstName);
};


sam.sayHello();



//regular function declaration
function firstFunction(parameter){
  // console.log(parameter);
}

firstFunction(globalVariable1);


function secondFunction(myArray){
  for(let i = 0; i < myArray.length; i++){
    // console.log(myArray[i]);
  }
}
secondFunction([2,3,[{hello: 'no go away'}],true,false, null]);




//go get the form
const myForm = document.getElementById('my-form');

//once we submit we are going to handle the data
function formHandler(event){
  event.preventDefault();
  console.log(event.target);
  //pull the values
  //run those through our constructor function making a new kitten object
  //then we can render to the page with our other guys.
}


myForm.addEventListener('submit', formHandler);

