// Looping Statements
// 1. Print Numbers

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Odd Numbers
// Print all odd numbers from 1 to 50.
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 1) {
    console.log("Odd numbers:", i);
  }
}

// 3. Multiplication Table
// Print the multiplication table of 7.

for (let i = 1; i <= 10; i++) {
  console.log(7 + "x" + i + "=" + 7 * i);
}

// 4. Reverse Counting
// Using while loop, print numbers from 20 to 1.
let i = 20;
while (i >= 1) {
  console.log(i);
  i--;
}

// 5. Sum of Numbers
// Find the total sum of numbers from 1 to 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Total sum of numbers: " + sum);

// 6. Array Loop
let fruits = ["apple", "banana", "orange", "grapes"];
for (let c of fruits) {
  console.log(c);
}

// 7. Count Even Numbers
let count = 0;
for (i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    count++;
  }
}
console.log("total even numbers: " + count);

// 8. Star Pattern
for (i = 1; i <= 5; i++) {
  let stars = "";

  for (j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

// Functions
// 9. Simple Function

function welcome() {
  console.log("Welcome to javascript");
}
welcome();

// 10. Function with Parameter
function identity(name) {
  console.log("hello " + name);
}
identity("jaibalaji");

// 11. Add Two Numbers
var a1 = 10;
var b1 = 20;

function add(a1, b1) {
  console.log(a1 + b1);
}
add(a1, b1);

// 12. Salary Bonus
function employeesalary(salary, bonus) {
  return salary + bonus;
}
let total = employeesalary(50000, 5000);
console.log("total salary: " + total);

// 13. Object Loop
let student = {
  name: "Rahul",
  course: "JavaScript",
  marks: 95,
};
for (let key in student) {
  console.log(key + ":" + student[key]);
}

// 14. Find Largest Number
function largest(c, d) {
  if (c > d) {
    return c;
  } else {
    return d;
  }
}
console.log(largest(10, 50));

// 15. Mini Employee Task
// Create an employee object and print:

let employee = {
  name: "jaibalaji",
  department: "IT",
  salary: 30000,
  bonus: 5000,
};
function calculateBonus(salary, bonus) {
  return salary + bonus;
}

let finalsalary = calculateBonus(employee.salary, employee.bonus);

console.log("employee name: " + employee.name);
console.log("department:" + employee.department);
console.log("salary: " + employee.salary);
console.log("salary after bonus: " + finalsalary);
