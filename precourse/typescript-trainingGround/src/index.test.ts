import "mocha";
import assert from "assert";
import {
  greet,
  isOld,
  countOdd,
  sumEvans,
  Person,
  Address,
  getStreetNo,
  PersonClass,
  Employee,
  getPersonNameString,
  IPerson,
  printThis,
  optionallyAdd2,
  greetPeople,
  AddToStart,
  Wrapper,
} from "./index";

describe("ts tests", () => {
  it("get greeting", () => {
    // arrange
    const birthYear = 1984;
    const name = "Mako";
    // act
    const result = greet(name, birthYear);
    // assert
    assert.strictEqual(result, "Hello Mako, you are 39 years old.");
  });
});
it("returns true if age is above or equal to 35", () => {
  // act
  const is34Old = isOld(34);
  const is35Old = isOld(35);
  const is36Old = isOld(36);

  // assert
  assert.strictEqual(is34Old, false);
  assert.strictEqual(is35Old, true);
  assert.strictEqual(is36Old, true);
});
it("fun with variables", () => {
  // act
  const name: string = "Mako";
  const nameImplicit = "Mako";
  const nameImplicit2 = name;

  const cool: boolean = true;
  const birthYear = 1972;

  // assert
  assert.strictEqual(typeof cool, "boolean");
  assert.strictEqual(typeof birthYear, "number");
  assert.strictEqual(typeof name, "string");
  assert.strictEqual(typeof nameImplicit, "string");
  assert.strictEqual(typeof nameImplicit2, "string");
});
it("count odd numbers", () => {
  // arrange
  const firstFive = [1, 2, 3, 4, 5];
  // act
  const numberOfOdds = countOdd(firstFive);
  // assert
  assert.strictEqual(numberOfOdds, 3);
});
it("summarizes all even numbers", () => {
  // ARRANGE
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // act
  const sum = sumEvans(nums);
  // assert
  assert.strictEqual(sum, 30);
});
it("get the street number for a person", () => {
  // arrange
  const pers: Person = {
    name: "Mako",
    birthyear: 1984,
    address: {
      street: "Vallefaret",
      streetNo: 17,
      city: "Oslo",
    },
  };
  // act
  const streetNumber = getStreetNo(pers);
  // assert
  assert.strictEqual(streetNumber, 17);
});
it("using classes", () => {
  // arrange
  const p = new PersonClass("Mako", 1984);
  const e = new Employee("ola", 1986);
  // act
  e.employeeIdNum = 12345;
  // assert
  // assert.strictEqual(p.name, 'mako');
  assert.strictEqual(p.getname(), "Mako");
  assert.strictEqual(e.getname(), "ola");
  assert.strictEqual(e.employeeIdNum, 12345);
});
it("prints an Iperson", () => {
  const person1: IPerson = { name: "Mako", birthyear: 1984 };
  const person2 = { name: "Ola", birthyear: 1986, drummer: false };
  // act
  const person1Address = getPersonNameString(person1);
  const person2Address = getPersonNameString(person2);
  // assert
  assert.strictEqual(person1Address, "Mako, 1984");
  assert.strictEqual(person2Address, "Ola, 1986");
});
it("uses union types to allow null", () => {
  // act
  const result1 = printThis(undefined);
  const result2 = printThis(null);
  // assert
  assert.strictEqual(result1, "no person supplied");
  assert.strictEqual(result2, "no person supplied");
  // both of these lines fail, because we require a parameter in the printThis function
  // enter Union type: a parameter can have one of a list of types => check the index.ts
});
it("optional parameters", () => {
  // act
  const sum = optionallyAdd2(1, 2, 3, 4, 5);
  // assert
  assert.strictEqual(sum, 3);
});
it("rest parameters print names", () => {
  // act
  const greeting1 = greetPeople("Hello");
  const greeting2 = greetPeople("Hello", "Marcus");
  const greeting3 = greetPeople("Hello", "Marcus", "Dasha");
  const greeting4 = greetPeople("Hello", "Marcus", "Dasha", "David");
  const greeting5 = greetPeople(
    "Hello",
    "Marcus",
    "Dasha",
    "David",
    "Julia",
    "Wietse",
    "Lucas"
  );
  // assert
  assert.strictEqual(greeting1, "Hello");
  assert.strictEqual(greeting2, "Hello", "Marcus");
  assert.strictEqual(greeting3, "Hello Marcus and Dasha");
  assert.strictEqual(greeting4, "Hello Marcus and Dasha and David");
  assert.strictEqual(
    greeting5,
    "Hello Marcus and Dasha and David and Julia and Wietse and Lucas"
  );
});
//Generic
it("add to list", () => {
  //arrange
  const listOfPeople: IPerson[] = [{ name: "Mako", birthyear: 1984 }];
  const litsOfAddresses: Address[] = [
    { street: "Vallefaret", streetNo: 17, city: "Oslo" },
    { street: "Møllerveien", streetNo: 12, city: "Oslo" },
  ];
  //act
  const numberOfPeople = AddToStart<IPerson>(listOfPeople, {
    name: "David",
    birthyear: 1975,
  });
  const numberOfAddresses = AddToStart<Address>(litsOfAddresses, {
    street: "Champs Elysee",
    streetNo: 1,
    city: "Paris",
  });
  //assert
  assert.strictEqual(numberOfPeople[0].name, "David");
  assert.strictEqual(numberOfAddresses[0].city, "Paris");
});
it("wrapper for addresses", () => {
  // arrange
  const listOfAddresses: Address[] = [
    { street: "Vallefaret", streetNo: 17, city: "Oslo" },
    { street: "SchraeschazschStrasse", streetNo: 2, city: "Amsterdam" },
    { street: "Champs Elysee", streetNo: 1, city: "Paris" },
  ];
  //act
  const list = new Wrapper<Address>(listOfAddresses);
  //assert
  assert.strictEqual(list.getFirst().city, "Oslo");
  assert.strictEqual(list.getFirst().city, "Paris");
});
it("wrapper for names", () => {
  // arrange
  const listOfNames = [
    { name: "Mako", birthyear: 1984 },
    { name: "ola", birthyear: 1986 },
    { name: "pepe", birthyear: 2020 },
  ];
  //act
  const list2 = new Wrapper<IPerson>(listOfNames);
  //assert
  assert.strictEqual(list2.getFirst().name, "Mako");
  assert.strictEqual(list2.getLast().name, "pepe");
});
