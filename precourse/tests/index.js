module.exports.greet = greet;
// module.exports.greetAgain = greetAgain;
// module.exports.emptyStringTest = emptyStringTest;

function greet(namePassedIn) {
  if (namePassedIn === ' ') {
    return "Attention empty field";
  } else {
    return `Welcome to Salt, ${namePassedIn}`;
  }
}
const greeting = greet("Mako");
// const plural = greet('Eliza and Mako ')
// const noStr = greet(' ')

// if (greeting === "Welcome to Salt, Mako") {
//   console.log("It works!");
// } else {
//   console.log("it fails");
// }

// function greetAgain(name1, name2) {
//   return `Welcome to Salt, ${name1} and ${name2}`;
// }
// const welcome = greetAgain("Eliza", "Mako");

// function emptyStringTest(name4String) {
//   if (name4String === " ") {
//     return "Attention empty field";
//   } else {
//     return `Welcome to Salt, ${name4String}`;
//   }
// }
// const test = emptyStringTest(" ");
