const prompt = require("prompt-sync")();

function hello(name) {
  return `Welcome to Salt young Padawan, ${name}`;
}
const result = (today, courseStart)=> {
    difference = courseStart-today;
    finalResult= Math.ceil(difference/(1000*3600*24))
    return finalResult
}


const name = prompt("What is your name?");
const start = prompt("When does the course start?");
const today = new Date();
const courseStart = new Date(start);
const greeting = hello(name);
console.log(greeting);
console.log(`Today it is ${result(today, courseStart)} until the course starts`)
