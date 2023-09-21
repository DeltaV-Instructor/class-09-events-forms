'use strict';

console.log('demo connected.');

let person = {
  name: 'Craig Barkley',
  age: 50,
  computerScientist: true,
  education: ['Southern Illinois University Carbondale', 'DeltaV'],
  code: function() {
    console.log('I am coding now!....');
    // return education[0];
    //key word 'this'
    return this.computerScientist;
  // return this.education[Math.floor(Math.random() * this.education.length)];
  }
};

//add props
person.food = 'Pizza';

console.log(person);



let parent = document.getElementById('parentElement');
console.log('🚀 ~ file: demo-objects.js:27 ~ parent:', parent);

let child = document.createElement('p');
console.log('🚀 ~ file: demo-objects.js:30 ~ child:', child);


child.textContent = 'Some words we want in our p element';
console.log('🚀 ~ file: demo-objects.js:30 ~ child:', child);

//section gets the <p> tag
parent.appendChild(child);
