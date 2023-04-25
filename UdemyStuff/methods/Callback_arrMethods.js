// forEach
let array1 = [1, 2, 13, 26, 22, 25, 30];

array1.forEach((el) => {
  console.log(el);
});
array1.forEach((el) => {
  if (el % 2 === 0) {
    console.log("even one");
    console.log(el);
  }
});

const movies = [
  {
    title: "Amadeus",
    score: 80,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "Jingle all the way",
    score: 71,
    year: 1996,
  },
  {
    title: "Gladiator",
    score: 95,
    year: 2000,
  },
  {
    title: "Parasite",
    score: 85,
    year: 2019,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "The Whale",
    score: 100,
    year: 2022,
  },
];
//print out name and score/100
const result = movies.forEach((movie) =>
  console.log(`${movie.title}- ${movie.score}/100.`)
);

// map
const doubles = array1.map((num) => console.log(num * 2));
movies.map((movie) => console.log(`The title is ${movie.title}`));

const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

// Write your code here
const firstNames = fullNames.map((name) => {
  return name.first;
});
console.log(firstNames);
// setTimeout and setInterval
console.log("hello? are your there?");
const echo = setTimeout(() => console.log("There.. ere.."), 3000);
//const echo2 = setInterval(() => console.log(theree..errree.err), 2000)
//using fiter to get the higher rated movies
const higherRated = movies.filter((movie) => movie.score > 70);
console.log(higherRated);
const lowRate = movies.filter((movie) => movie.score < 70);
console.log(lowRate);

let weather = 39;
const weatherstate = weather < 39 ? "It's nice and cool " : "Too hot";
console.log(weatherstate);
    // function allEvens(numbers) {
    //   const fil = numbers.every(num=> num%2 ===0)
    //   console.log(fil)
    //   }
  const allEvens =(numbers)=> numbers.every(num=> num%2 ===0)

allEvens([2,4,6])
