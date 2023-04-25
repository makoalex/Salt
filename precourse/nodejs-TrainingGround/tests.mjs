import assert from "assert";
import { getAge, getAgeGroup, divide, addWithLogg } from "./index.mjs";

describe("age calculator", () => {
  it("someone born in 1972 is 50 2022", () => {
    //act
    const result = getAge(1972, 2022);
    //assert
    assert.equal(result, 50);
  });
  it("someone born in 2021 is 1 2022", () => {
    //arrange
    //act
    const result = getAge(2021, 2022);
    assert.equal(1, result);
  });
  it("someone born in 1984 is 39 2023", () => {
    //arrange and act
    const result = getAge(1984, 2023);
    // assert
    assert.equal(39, result);
  });
});

//  AGE STUFF

describe("age classifier", () => {
  it("less than 0 not possible", () => {
    const result = getAgeGroup(-1);
    assert.equal(result, "unborn");
  });
  it("over 115 only if you're unlucky", () => {
    const result = getAgeGroup(115);
    assert.equal(result, "not possible");
  });
  it("0-3 years old should be a toddler", () => {
    //arrange
    //act
    const result = getAgeGroup(0);

    //assert
    assert.equal(result, "toddler");
  });
  it("4-12  years old should be a kid", () => {
    //arrange and act
    const result = getAgeGroup(4);
    //assert
    assert.equal(result, "kid");
  });
  it("13-19 years old should be a teenager", () => {
    const result = getAgeGroup(18);
    assert.equal(result, "teenager");
  });

  it("20-39 should be an adult", () => {
    const result = getAgeGroup(38);
    assert.equal(result, "adult");
  });
  it("above 39 years old... you are just old", () => {
    const result = getAgeGroup(39);
    assert.equal(result, "too old for this shit");
  });
  it("but 50, that is the prime age my friend!!", () => {
    const result = getAgeGroup(50);
    assert.equal(result, "prime age");
  });
});

//VARIABLE STUFF
describe("variables", () => {
  it("uninitialized variables are undefined", () => {
    // act
    let aNumber;
    //assert
    assert.equal("undefined", typeof aNumber);
    assert.equal(undefined, aNumber);
  });
  it("null should be used for not set", () => {
    //arrange
    // declaring a dummy function
    const peekIntoTheBox = () => {
      return false;
    };
    //act
    let isTheCatAlive = null;
    //assert
    assert.equal(null, isTheCatAlive);
    isTheCatAlive = peekIntoTheBox();
  });
  //   it("array keep value", () => {
  //     //arrange
  //     const array = [1, 2, 3, 4];
  //     const array2 = ["Marcus", "Eliza,", "Obaid"];
  //     const array3 = ["Marcus", 39, true];
  //   });
  it("getting elements out of an array", () => {
    //arrange
    const array2 = ["Marcus", "Eliza", "Obaid"];
    // act
    const firstEl = array2[0];
    const secondEl = array2[1];
    const fullLength = array2.length;
    const lastEl = array2[array2.length - 1];
    //assert
    assert.equal(firstEl, "Marcus");
    assert.equal(secondEl, "Eliza");
    assert.equal(fullLength, 3);
    assert.equal(lastEl, "Obaid");
  });
});

// while loopy loop test
describe("loops does things over and over", () => {
  it("while loops just keeps going, until we stop 'em", () => {
    //arrange
    let counter = 0;
    // act
    while (counter < 2) {
      console.log(`Counter is now ${counter}`);
      counter += 1;
    }
  });
  it("loop through an array with while", () => {
    // arrange
    let index = 0;
    let names = ["Marcus", "Eliza,", "Obaid"];
    // act
    while (index < names.length) {
      index += 1;
      console.log(`Index is ${index}`);
    }
  });
  it("loop through and array with for loops", () => {
    //arrange
    const names = ["Marcus", "Eliza,", "Obaid"];
    //act
    for (let i of names) {
      console.log(i);
    }
    for (let i = 0; i < names.length; i++) {
      console.log(names[i]);
    }
  });
  it("calling getAge for each age", () => {
    // arrange
    const birthYear = [1972, 2022, 1984];
    const currentYear = 2023;
    //act
    for (let i = 0; i < birthYear.length; i++) {
      const result = currentYear - birthYear[i];
      console.log(`age is ${result}`);
    }
    for (let date of birthYear) {
      console.log(getAge(date, currentYear));
    }
  });
  //array methods push
  it("adding elements to an array with push", () => {
    //arrange
    const names = ["Marcus", "Eliza", "Obaid"];
    assert.equal(names.length, 3);
    //act
    names.push("Mako");
    //assert
    assert.equal(names.length, 4);
    assert.equal(names[3], "Mako");
  });
  //pop
  it("removing elements from array with pop", () => {
    const names = ["Marcus", "Eliza", "Obaid", "Mako"];
    assert.equal(names.length, 4);
    //act
    names.pop();
    //assert
    assert.equal(names.length, 3);
    assert.equal(names[3], undefined);
  });
  //using splice to remove
  it("removing elements from an array using splice", () => {
    const names = ["Marcus", "Eliza", "Obaid", "Mako"];
    assert.equal(names.length, 4);
    //act
    names.splice(names.length - 1, 1);
    //asser
    assert.equal(names.length, 3);
    assert.equal(names[3], undefined);
  });
  it(" deleting the 1st element with splice", () => {
    const names = ["Marcus", "Eliza,", "Obaid", "Mako"];
    assert.equal(names.length, 4);
    //act
    names.splice(0, 1);
    //assert
    assert.equal(names.length, 3);
    assert.equal(names[0] != "Marcus", true);
  });
  //mutable vs immutable
  it("adding elements to an immutable array", () => {
    //arrange
    const names = ["Marcus", "Eliza,", "Obaid"];
    assert.equal(names.length, 3);
    //act
    const newNames = [...names, "Mako"];
    // assert
    assert.equal(newNames.length, 4);
    assert.equal(names.length, 3);
  });
  it("removing all elements that are greater than 10", () => {
    const numbers = [10, 23, 1, 33, 8, 12];
    assert.equal(numbers.length, 6);
    //
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 10) {
        numbers.splice(1, i);
        console.log(numbers);
      }
    }
    //assert
    assert.equal(numbers.length, 3);
  });
  it("filter an array- immutable", () => {
    const numbers = [10, 23, 1, 33, 8, 12];
    assert.equal(numbers.length, 6);
    //act
    const newNum = numbers.filter((num) => num > 10);

    assert.equal(newNum.length, 3);
  });
});
//objects
describe("objects are for builing things", () => {
  it("our first object- a Mako :D", () => {
    const person = {
      name: "Mako",
      birthYear: 1984,
      isTeacher: false,
    };
    //Assert
    assert.equal(person.name, "Mako");
    assert.equal(person.birthYear, 1984);
    assert.equal(person.isTeacher, false);
  });
  //get age function for object
  it("get age for person ", () => {
    //arrange
    const person = {
      name: "Mako",
      birthYear: 1984,
      isTeacher: false,
    };
    // act
    const age = getAge(person.birthYear, 2023);
    assert.equal(age, 39);
  });
  it("mako person list of films", () => {
    const person = {
      name: "Mako",
      birthYear: 1984,
      isTeacher: false,
      favFilms: [
        {
          title: "Parasite",
          year: 2019,
        },
        {
          title: "The Whale",
          year: 2022,
        },
        {
          title: "Amadeus",
          year: 1984,
        },
      ],
    };
    assert.equal(person.favFilms.length, 3);
    assert.equal(person.favFilms[0].title, "Parasite");
    assert.equal(person.favFilms[2].year, 1984);
  });
});
//checking for errors
describe("division", () => {
  it("takes 2 numbers and divides them", () => {
    const result = divide(4, 2);
    //assert
    assert.equal(result, 2);
  });
  it("dividing by 0 should throw error", () => {
    try {
      const result = divide(4, 0);
    } catch (error) {
      assert.notEqual(error, undefined);
      assert.equal(error.message, "no division by 0");
    }
  });
});
describe("callbacks", () => {
  it("adding with logger", () => {
    const logthis2 = (message) => {
      console.log(message);
      //logthis2 is a reference to logger paramter of the function addWIithLogg
    };
    //act
    // const result = addWithLogg(1, 89, logthis2);
    const result = addWithLogg(1,89, (message)=>console.log(message))
    assert.equal(result, 90)
  });
});
