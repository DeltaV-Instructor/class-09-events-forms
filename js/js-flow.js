let a = 2;
let b = 3;
console.log(a + b);
let c = a;
a = 7;
console.log(a);
console.log(c);

function printTheThing(a) {
  console.log(a);
}

printTheThing(4);
printTheThing(b);
//
console.log(1);
function doStuff() {
  console.log(2);
}
console.log(3);
function doThings() {
  console.log(4);
  doStuff();
  console.log(5);
}
console.log(6);
doStuff();
console.log(7);
doThings();
console.log(8);
