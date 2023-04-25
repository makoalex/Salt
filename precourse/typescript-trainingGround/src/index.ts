function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old.`;
}

const isOld = (age: number): boolean => {
  if (age>=35){
    return true;
  }  
};

const countOdd = (firstFive: number[]): number =>
  // getting odd numbers total
  firstFive.filter(i => i % 2 !== 0).length;

const sumEvans = (arr: number[]): number => {
  const even = arr.filter(i => i % 2 === 0);
  return even.reduce((sum, current) => sum + current);
};

// type alias
type Address = {
  street: string;
  streetNo: number;
  city: string;
};
type Person = {
  name: string;
  birthyear: number;
  address: Address;
};
function getStreetNo(streetN: Person): number {
  return streetN.address.streetNo;
}
// class
class PersonClass {
  private name: string = '';

  birthYear: number = 0;

  constructor(name: string, birthyear: number) {
    this.name = name;
    this.birthYear = birthyear;
  }

  // accessing the property that is private
  getname() {
    return this.name;
  }
}
class Employee extends PersonClass {
  employeeIdNum = -1;
}
const p = new PersonClass('mako', 1984);
const e = new Employee('ola', 1986);
// console.log(e.employeeIdNum);
// console.log(e.getname);

interface IPerson {
  name: string;
  birthyear: number;
}
const getPersonNameString = (pers: IPerson) => `${pers.name}, ${pers.birthyear.toString()}`;

// ANY
// function printThis(p:Person) {
//   return p.name;
// }

// with UNION TYPE
// function printThis(pe: Person | null | undefined) {
//   //   pe ? pe.name : 'no person supplied';
//   if (!pe) {
//     return 'no person supplied';
//   }
//   return pe.name;
// }
const printThis = (pe: Person | null | undefined) => (!pe ? 'no person supplied' : pe.name);
// FUNCTIONS
//  const optionallyAdd= (arr:Array<number>): number => arr[0] +arr[1]
const optionallyAdd = (
  num1: number,
  num2: number,
  num3?: number,
  num4?: number,
  num5?: number,
) => num1 + num2;

// const optionallyAdd2 = (num1: number, num2: number, num3?: number, num4?: number, num5?: number): number => {
//   let sum = num1 + num2;

//   if (num3) {
//     sum += num3;
//   }
//   if (num4) {
//     sum += num4;
//   }
//   sum += num5 : 0;
//   return sum;
// };
const optionallyAdd2 = (num1: number, num2: number, num3?: number, num4?: number, num5?: number) => {
  let sum = num1 + num2;

  if(num3 !== undefined) {
    sum += num3;
  }

  if(num4) {
    sum += num4;
  }

  sum += num5 ? num5 : 0;

  return sum;
}
// rest parameters
function greetPeople(greeting: string, ...names: string[]) {
  return `${greeting} ${names.join('and')}`.trim();
}

//generic
function AddToStart<T>(listOfPeople:T[], itemToAdd:T){
  return [itemToAdd, ...listOfPeople]
}
class Wrapper<T>{
  private list:T[];
  constructor(list:T[]){
    this.list = list;
  }
  public getFirst():T{ return this.list[0];}
  public getLast():T {return this.list[this.list.length-1]}

}

export {
  greet,
  isOld,
  countOdd,
  sumEvans,
  Address,
  Person,
  getStreetNo,
  PersonClass,
  Employee,
  IPerson,
  getPersonNameString,
  printThis,
  optionallyAdd2,
  greetPeople,
  AddToStart,
  Wrapper,
};
