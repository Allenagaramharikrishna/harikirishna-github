let student = {
  id: 12,
  name: "Hari",
  marks: 81,
};

let student1 = {
  id: 12,
  name: "Hari",
  marks: 81,
};
console.log(student.name);
console.log(student.id);
console.log(student.marks);

function squareArray() {
  let data = [1, 2, 3, 4, 5, 6];
  function square() {
    for (let i = 0; i < data.length; ++i) {
      data[i] = data[i] * 2;
    }
    return data;
  }
  return square;
}

let sq = squareArray();
let squaredArray = sq();
console.log(squaredArray);

class ImplementAbstraction {
  // method to set values of internal members
  set(x, y) {
    this.a = x;
    this.b = y;
  }

  display() {
    console.log(`a = ${this.a}`);
    console.log(`b = ${this.b}`);
  }
}

const obj = new ImplementAbstraction();
obj.set(10, 20);
obj.display();
class class1 {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

// inheriting parent class
class Student extends Person {}

let student2 = new Student("Jack");
student1.greet();

// parent class
class Person {
  constructor(name) {
    this.name = name;
    this.occupation = "unemployed";
  }

  greet() {
    console.log(`Hello ${this.name}.`);
  }
}
