// JavaScript Tasks – Type Casting & Flow Control
// Task 1 – Predict the Output

console.log("10" + 5); // O/P : 105
console.log(typeof ("10" + 5)); // Datatype : String

console.log(10 + true); // O/P : 11
console.log(typeof (10 + true)); // Datatype : Number

console.log(false + null); // O/P : 0
console.log(typeof (false + null)); // Datatype : Number

console.log("hello" + undefined); // O/p : helloundefined
console.log(typeof ("hello" + undefined)); // Datatype : String

console.log([1, 2] + 5); // O/p : 1,25
console.log(typeof ([1, 2] + 5)); // Datatype : String

// Task 2 – Implicit Type Casting

// 1.	String + Number
console.log("100" + 50);

// 2.	Boolean + Number
console.log(true + 25);

// 3.	Array + String
console.log([10, 20, 30] + " 40");

// 4.	Object + Number
console.log({ j: 5 } + 10);

// 5.	Null + Number
console.log(null + 20);

// Print datatype using typeof.

console.log(typeof ("100" + 25)); // String
console.log(typeof (true + 25)); // Number
console.log(typeof ([10, 20, 30] + "40")); // String
console.log(typeof ({ j: "5" } + 10)); // String
console.log(typeof (null + 20)); // Number

// Task 3 – Explicit Type Casting

console.log(Number("500")); //  500
console.log(Number(true)); //  1
console.log(Number(false)); //  0
console.log(Number(null)); //  0
console.log(Number("abc")); // NaN
console.log(Number([100])); // 100

// Task 4 – Boolean Constructor

console.log(Boolean("")); // False
console.log(Boolean("javascript")); // True
console.log(Boolean(0)); // False
console.log(Boolean(1)); // True
console.log(Boolean(null)); // False
console.log(Boolean(undefined)); // False
console.log(Boolean([1, 2, 3])); // True
console.log(Boolean({ a: 25 })); // True

// Task 5 – Student Pass or Fail

let mark = 45;
// 	Above 35 → Pass
if (mark > 35) {
  console.log("Pass");
} else {
  console.log("Fail"); // o/p : Pass
}

// Below 35 → Fail
if (mark < 35) {
  console.log("Pass");
} else {
  console.log("Fail"); // o/p : Fail
}

// Task 6 – Voting Eligibility

let age = 20;

// 	18 and above → Eligible
if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not eligible"); // o/p : Eligible
}

// Otherwise → Not Eligible
if (age <= 18) {
  console.log("Eligible");
} else {
  console.log("Not eligible"); // o/p : Not eligible
}

// Task 7 – Greatest Number

let a = 50;
let b = 80;
let c = 30;

if (a > b && a > c) {
  console.log("A is greater");
} else if (b > a && b > c) {
  console.log("B is greater");
} else {
  console.log("C is greater"); // o/p : B is greater
}

// Task 8 – Traffic Light System
// Using switch statement:

// red → stop

let Trafficlight = "red";
switch (Trafficlight) {
  case "red":
    console.log("STOP"); // Stop
    break;

  case "yellow":
    console.log("READY");
    break;

  case "Green":
    console.log("GO");
    break;

  default:
    console.log("Safe Drive");
    break;
}

let Trafficlight2 = "yellow";
switch (Trafficlight2) {
  case "yellow":
    console.log("READY"); // Ready
    break;

  case "red":
    console.log("STOP");
    break;

  case "Green":
    console.log("GO");
    break;

  default:
    console.log("Safe Drive");
    break;
}

let Trafficlight3 = "Green";
switch (Trafficlight3) {
  case "Green":
    console.log("GO"); // Go
    break;

  case "red":
    console.log("STOP");
    break;

  case "yellow":
    console.log("READY");
    break;
  default:
    console.log("safe Drive");
    break;
}

// Task 9 – Login System
// Use nested if.

// Both correct → Login Success

let username = "admin";
let password = "1234";

if ((username = "admin")) {
  if ((password = "1234")) {
    console.log("login successfully");
  } else {
    console.log("Invalid Login"); // Login Successfully
  }
}

let username1 = "admin";
let password1 = "1234";

if ((password1 = "1111")) {
  if ((username1 = "admin")) {
    console.log("Invalid login");
  } else {
    console.log("Login successfully"); // Invalid Login
  }
}

// Task 10 – Session Finder

let hour = 14;

if (hour >= 1 && hour <= 12) {
  console.log("Good Morning");
} else if (hour >= 13 && hour <= 15) {
  console.log("Good Afternoon");
} else if (hour >= 16 && hour <= 19) {
  console.log("Good Evening");
} else if (hour >= 20 && hour <= 24) {
  console.log("Good Noght");
} else {
  console.log("wrong time"); // O/p : Good Afternoon
}

// Using Prompt Method :

let hour1 = prompt("Enter Current Time");

if (hour1 >= 1 && hour1 <= 12) {
  alert("Good Morning");
} else if (hour1 >= 13 && hour1 <= 15) {
  alert("Good Afternoon");
} else if (hour1 >= 16 && hour1 <= 19) {
  alert("Good Evening");
} else if (hour1 >= 20 && hour1 <= 24) {
  alert("Good Night");
} else {
  alert("Wrong Time");
}

// Bonus Challenge 🔥
// Predict outputs without running:

console.log(true + true); // 2
console.log(typeof (true + true)); // Number

console.log("5" - 2); // 3
console.log(typeof ("5" - 2)); // Number

console.log("5" + 2); // 52
console.log(typeof ("5" + 2)); // String

console.log(null + 0); // 0
console.log(typeof (null + 0)); //  Number

console.log(undefined + 1); // NaN
console.log(typeof (undefined + 1)); // Number

console.log(Boolean("")); // False
console.log(typeof Boolean("")); // Boolean

console.log(Number(true)); // 1
console.log(typeof Number(true)); // Number
