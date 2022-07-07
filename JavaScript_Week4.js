// Very Easy
function min(num1, num2) {
  if (num1 < num2)
    return num1;
  else
    return num2;
}
console.log(min(1, 21));

// Easy
var names = ["Khristine Bautista", "Belly Conklin", "Conrad Fisher"]
var ages = ["19", "16", "18"]

console.log(`Hello, my name is ${names[1]} and I'm ${ages[1]} years old.`)

// Medium
var months = ["Null", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var numMonth = parseFloat(prompt("Enter a number to get a month"))

if (numMonth < 1) {
  console.log("Invalid Number, Try Again")
} else if (numMonth > 12) {
  console.log("Invalid Number, Try Again")
} else {
  console.log(`${months[numMonth]}`)
}

// Hard
var tomHeight = prompt("Enter Tom's Height")
var tomMass = prompt("Enter Tom's Mass")
var jerryHeight = prompt("Enter Jerry's Height")
var jerryMass = prompt("Enter Jerry's Mass")

var tomBMI = tomMass / (tomHeight * tomHeight)
var jerryBMI = jerryMass / (jerryHeight * jerryHeight)

if (tomBMI > jerryHeight) {
  console.log("Tom has a bigger BMI than Jerry")
} else {
  console.log("Jerry has a bigger BMI than Tom")
}