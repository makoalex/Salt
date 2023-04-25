const twoFer = (name: string = "you"): string => `one for ${name}, one for me`;
console.log(twoFer('mako'))

const leapYear = (year: number): boolean => {
  if (year % 4 === 0 && year % 100 != 0) return true;
  else return false;
};

console.log( leapYear(2013))
console.log(leapYear(2012))

// generic

function randomElement <T> (arr:T[]):T {
  return Math.floor(Math.random()* arr.length);
}