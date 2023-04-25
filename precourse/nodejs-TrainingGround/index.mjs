// function getAge(birthYear, currentYear){
//     const result = currentYear - birthYear;
//     return result;
// }
// const age = getAge(1972, 2022);

//refactored version using arow function instead
// const getAge= (birthYear, currentYear) =>{
//     const result= currentYear - birthYear;
//     return result
// }

// even more simplefied version:
export const getAge = (birthYear, currentYear) => currentYear - birthYear;

// export const getAgeGroup = (age) => {
//   if (age < 4) {
//     return "toddler";
//   } else if (age < 13) {
//     return "kid";
//   } else {
//     return "teenager";
//   }
// };
// SIMPLEFIED
export const getAgeGroup = (age) => {
  if (age < 0) return "unborn";
  if (age < 4) return "toddler";
  if (age < 13) return "kid";
  if (age < 20) return "teenager";
  if (age < 39) return "adult";
  if (age === 50) return "prime age";
  if (age >= 39 && age < 115) return "too old for this shit";
  return "not possible";
};
export const divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("no division by 0");
  }
  return num1 / num2;
};
export const addWithLogg = (number1, number2, logger) => {
  logger(`About to '${number1} +  ${number2}'`);
  return number1 + number2;
};
