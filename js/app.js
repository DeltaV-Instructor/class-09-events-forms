'use strict';
console.log('js connected');

let form = document.getElementById('new-pet-form');
console.log(form);



//building our objects
function Pet(petName,breed,imageName,interests,isGoodWithKids,isGoodWithDogs,isGoodWithAnimals){
  this.petName = petName;
  this.breed = breed;
  this.imageName = imageName;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithAnimals = isGoodWithAnimals;
}

// new Pet(here is where we need the arguments for our constructor function)
let petOne = new Pet('Tom', 'Tiger', 'diabloBlanco',['Sun light', 'Mouse toys', 'Red Dots'], true, false, true);
let petTwo = new Pet('Garfield','LazyCat', 'jumper',['Cat nip', 'strings', 'food'],true, false,true);
let petThree = new Pet('Sylvester','sadCat', 'tommyBob',['birds', 'wands', 'naps'],true, false,true);

//add a prototype function for our objects that know that they are a Pet object
Pet.prototype.setAge = function(){
  this.age = randomAge(3,12) + ' Months old.';
};

//add one more prototype
Pet.prototype.getInterests = function(){
  //grad a random array index and return that interest
  let randomeArrayIndex = Math.floor(Math.random() * this.interests.length);
  return randomeArrayIndex;
};
//helper function
function randomAge(minMonth, maxMonth){
  return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
}


Pet.prototype.render = function(){
  let parentElement = document.getElementById('kittenProfiles');
  //create article
  let article = document.createElement('article');
  parentElement.appendChild(article);
  //create h2
  let h2 = document.createElement('h2');
  h2.textContent = this.petName;
  article.appendChild(h2);
  // create p
  let petPara = document.createElement('p');
  petPara.textContent = 'Cats are cool, and pet one is ' + this.age;
  article.appendChild(petPara);
  // create ul
  let petUl = document.createElement('ul');
  article.appendChild(petUl);
  for(let i = 0; i < this.interests.length; i++){
    let petLi = document.createElement('li');
    petLi.textContent = this.interests[i];
    petUl.appendChild(petLi);
  }
  let petImage = document.createElement('img');
  petImage.setAttribute('src', 'images/' + this.imageName + '.jpeg');
  petImage.setAttribute('alt', 'Adopt our pet kittens');
  article.appendChild(petImage);

  //add table
  //we need to get the element by its id
  let petTable = document.getElementById('adoptPets-table');

  //first we create a TR table row.
  //then we can create TR table body
  let petRow = document.createElement('tr');

  let headNameCell = document.createElement('th');
  headNameCell.textContent = this.petName;
  petRow.appendChild(headNameCell);

  let breedCell = document.createElement('td');
  breedCell.textContent = this.breed;
  petRow.appendChild(breedCell);

  let ageCell = document.createElement('td');
  ageCell.textContent = this.age;
  petRow.appendChild(ageCell);

  let interestsCell = document.createElement('td');
  interestsCell.textContent = this.interests;
  petRow.appendChild(interestsCell);

  petTable.appendChild(petRow);
};

petOne.getInterests();
petTwo.getInterests();
petThree.getInterests();
petOne.setAge();
petTwo.setAge();
petThree.setAge();


let allPets = [petOne, petTwo, petThree];

for(let i = 0; i < allPets.length; i++){
  allPets[i].render();
}





//add in our form functionality
//call our render function to see our objects and pets.



//Set up the event listerners to listent to the submit event.
//1. which element do we need? form variable
//2.which event are we listening to? submit.
//3.what code should I run?   run a function.

function handleFormSubmitted(event){
  event.preventDefault();
  console.log('made it to the handle submit function');
}


// 2 parameters
form.addEventListener('submit', handleFormSubmitted);















