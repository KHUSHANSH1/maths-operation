alert("\"hello welocme to mathematical equation solver\" ")
let v = window.prompt("Please enter first number for maths calculation: ");
let r = window.prompt("Please enter second number for maths calculation: ");
let sign = window.prompt("Please enter the sign of calculation for above integers (*, -, +, /): ");
let t = parseInt(v);  // Correct conversion to integer
let u = parseInt(r);  // Correct conversion to integer

let m = t * u;
let d= t/u;
let a= t+u;
let s= t-u;
  // Multiplication operation

if (sign.toLowerCase() === "*") {
    alert("Result is: "+ m);  // Use alert for the result
} 
if (sign.toLowerCase() === "+") {
    alert("Result is: "+ a);  // Use alert for the result
} 
if (sign.toLowerCase() === "-") {
    alert("Result is: "+ s);  // Use alert for the result
} 
if (sign.toLowerCase() === "/") {
    alert("Result is: "+ d);  // Use alert for the result
} 
if (sign.toLowerCase() === "+"||"-"||"*"||"/") {
    console.log();  // Use alert for the result
} 
else if (sign.toLowerCase() !== "+"||"-"||"*"||"/") {
  
alert("Please choose correct identical operation");}

alert (typeof(v))
