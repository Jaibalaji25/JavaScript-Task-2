// Create a function called welcomeUser.

function welcomeUser(name) {
  console.log("Welcome " + name);
}
welcomeUser("jaibalaji");

// Task 2 — Parameter + Return

function squareNumber(a) {
  return a * a;
}
console.log(squareNumber(5));

// Task 3 — Object Function
let employee1 = {
  name: "Rahul",
  salary: 50000,
};
function getObject(bonus) {
  console.log(employee1.name);
  console.log(employee1.salary + bonus);
}
getObject(5000);

function scopecheck() {
  if (true) {
    var Movie = "Vikram";
    let Actor = "Kamal Haasan";
    const Director = "Lokesh Kanagaraj";
  }
  console.log(Movie); // var is a Global Scope (works)

  //   console.log(Actor); // Let is a Block scope(Error)
  //   console.log(Director); // Const also a Block Scope(Error)

  //   Block Scope has Cannot Access outside the Block
}
scopecheck();

// Task 5 — Arrow Function
const add1 = (a, b) => {
  console.log(a + b);
};
add1(5, 10);

// Task 6 — Callback Function

function multiply(a, b) {
  return a * b;
}
function calculator(callback, num1, num2) {
  console.log(callback(num1, num2));
}
calculator(multiply, 5, 2);

// Task 7 — Generator Function
function* offers() {
  yield "50% OFF";
  yield "Free Delivery";
  yield "cashback";
}
let genvalues = offers();
console.log(genvalues.next().value);
console.log(genvalues.next().value);
console.log(genvalues.next().value);

// Task 8 — Default Parameter
// Create:

function student1(name, course = "Javascript") {
  console.log("name: ", name);
  console.log("course:", course);
}
student1("jaibalaji");

// Task 9 — Currying
function multi(c1) {
  return function (c2) {
    return function (c3) {
      console.log(c1 * c2 * c3);
    };
  };
}
multi(2)(3)(4);

// Task 10 — Spread Operator
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let totalArray = [...array1, ...array2];
console.log(totalArray);
// o/p : [1, 2, 3, 4, 5, 6]

// Task 11 — Object Spread

let object1 = {
  name: "jaibalaji",
};
let object2 = {
  role: "developer",
};
let totalobject = { ...object1, ...object2 };
console.log(totalobject);
// o/p : {name: "jaibalaji", role: "developer"}

// Task 12 — Rest Operator
function numbers(...num) {
  console.log(num);

  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
}
numbers(1, 2, 3, 4);

// Create one small Student Management System using:

let students = [];
//  add student
function addStudent(name, mark) {
  // Object
  let student = {
    name: name,
    mark: mark,
  };
  students.push(student);
}
// print students
function printStudents() {
  console.log("Student List");

  for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + " - " + students[i].mark);
  }
}
// Callback Function
function calculateMarks(mark, callback) {
  callback(mark);
}
function showMark(mark) {
  console.log("Total Mark: " + mark);
}
//  add bonus marks
function addBonus(bonus) {
  students = students.map((student) => {
    return {
      ...student, // Spread Operator
      mark: student.mark + bonus,
    };
  });
}

// Rest Operator
function totalMarks(...marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
  }
  console.log("Total Marks: " + total);
}

// Add Students
addStudent("Jaibalaji", 80);
addStudent("Naveen", 75);

// Print Students
printStudents();

// Callback
calculateMarks(80, showMark);

// Add Bonus
addBonus(5);
console.log("After Bonus");
printStudents();

// Rest Operator
totalMarks(80, 75, 90);
