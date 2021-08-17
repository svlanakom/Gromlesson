function getSenseOfLife() {
  return 42;
}
// console.log(getSenseOfLife());

// console.log(42);
function getSquared(n) {
  return n * n;
}

//

function sum(n, m) {
  return n + m;
}

console.log(sum(2, 3));

//

function getMessege(age) {
  console.log("I am " + age + " years old");
}
console.log(getMessege(100));
//

// const mult = (firstNum, secondNum) => firstNum * secondNum;

// console.log(mult);
// console.log(mult(10, 14));

const mult = function (firstNum, secondNum) {
  return firstNum * secondNum;
};
console.log(mult);
console.log(mult(10, 14));

const square = (num) => num * num;

const getMagicNumber = () => 17;
console.log(getMagicNumber());
