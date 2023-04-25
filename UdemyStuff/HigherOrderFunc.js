// call twice the roll dice function
function rolltwice(func) {
  func();
  func();
}

const rollDie = function () {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
};

rolltwice(rollDie);
//if we had use rollDie() as an argument, it would have executed the function imediately and that result
// would have been passed instead, twice

const tenTimes = function (f) {
  for (let i = 0; i < 10; i++) {
    f();
    console.log("ten times");
  }
};
tenTimes(rollDie);
// returning functions
function makeMistake() {
  const rand = Math.random();
  if ((rand < 0, 5)) {
    return function () {
      console.log("Im the good function");
    };
  } else {
    return function () {
      alert("you have been disqualifed");
    };
  }
}
const randf = makeMistake();
randf();

//making a higher order function Factory function
function isInRange(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}
const isChild = isInRange(0, 18);
isChild(40);
const isAdult = isInRange(18, 64);
isAdult(55);

function LetterChanges(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (122 === str.charCodeAt(i)) {
      result += "a";
    } else if (90 === str.charCodeAt(i)) {
      result += "A";
    } else if (
      (65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 89) ||
      (97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 121)
    ) {
      result += String.fromCharCode(str.charCodeAt(i) + 1);
    } else if (str.charCodeAt(i)===32) {
      result += String.fromCharCode(32);
    } else {
      result === str.charAt(i);
    }
  }
  return result.replace(/[aeiou]/g, (x) => x.charAt().toUpperCase());
}
LetterChanges("fun times");
