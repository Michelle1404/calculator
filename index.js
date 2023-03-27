class Calculator {
  constructor() {
    this.piNumber = 3.141592653589793;
    this.eulerNumber = 2.718281828459045;
  }
  piSum() {
    console.log(`PI ${this.piNumber}`);
  }
  eulerSum() {
    console.log(`Euler's number ${this.eulerNumber}`);
  }
  ratio(x, y, width) {
    let sumOne = width / x;
    let sumTwo = sumOne * y;
    console.log(`height is ${sumTwo} on ratio ${x}:${y}`);
  }
  percentage(x, y) {
    console.log(`% of ${x} in ${y} = ${(y * 100) / x}.`);
  }
  add(x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
  }
  subtract(x, y) {
    console.log(`${x} - ${y} = ${x - y}`);
  }
  multiply(x, y) {
    console.log(`${x} * ${y} = ${x * y}`);
  }
  divide(x, y) {
    if (y === 0) {
      console.log("Error");
    } else {
      console.log(`${x} / ${y} = ${x / y}`);
    }
  }
  modulation(x, y) {
    let sum = x % y;
    if (y === 0) {
      console.log("Error");
    } else {
      console.log(`${x} mod ${y} = ${sum}`);
    }
  }
  elevate(x, y) {
    console.log(`${x} ^ ${y} = ${x ** y}`);
  }
  sqrt(x) {
    console.log(`square of ${x} = ${Math.sqrt(x)}`);
  }
}

let calculate = new Calculator();

calculate.piSum();
console.log("----");
calculate.eulerSum();
console.log("----");
calculate.ratio(2, 2, 10);
console.log("----");
calculate.percentage(10, 2);
console.log("----");
calculate.add(4, 5);
console.log("----");
calculate.subtract(4, 5);
console.log("----");
calculate.multiply(4, 5);
console.log("----");
calculate.divide(5, 4);
console.log("----");
calculate.modulation(5, 4);
console.log("----");
calculate.elevate(2, 3);
console.log("----");
calculate.sqrt(64);
