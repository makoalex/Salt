"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var assert_1 = require("assert");
var index_1 = require("./index");
describe("ts tests", function () {
    it("get greeting", function () {
        // arrange
        var birthYear = 1984;
        var name = "Mako";
        // act
        var result = (0, index_1.greet)(name, birthYear);
        // assert
        assert_1.default.strictEqual(result, "Hello Mako, you are 39 years old.");
    });
});
it("returns true if age is above or equal to 35", function () {
    // act
    var is34Old = (0, index_1.isOld)(34);
    var is35Old = (0, index_1.isOld)(35);
    var is36Old = (0, index_1.isOld)(36);
    // assert
    assert_1.default.strictEqual(is34Old, false);
    assert_1.default.strictEqual(is35Old, true);
    assert_1.default.strictEqual(is36Old, true);
});
it("fun with variables", function () {
    // act
    var name = "Mako";
    var nameImplicit = "Mako";
    var nameImplicit2 = name;
    var cool = true;
    var birthYear = 1972;
    // assert
    assert_1.default.strictEqual(typeof cool, "boolean");
    assert_1.default.strictEqual(typeof birthYear, "number");
    assert_1.default.strictEqual(typeof name, "string");
    assert_1.default.strictEqual(typeof nameImplicit, "string");
    assert_1.default.strictEqual(typeof nameImplicit2, "string");
});
it("count odd numbers", function () {
    // arrange
    var firstFive = [1, 2, 3, 4, 5];
    // act
    var numberOfOdds = (0, index_1.countOdd)(firstFive);
    // assert
    assert_1.default.strictEqual(numberOfOdds, 3);
});
it("summarizes all even numbers", function () {
    // ARRANGE
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // act
    var sum = (0, index_1.sumEvans)(nums);
    // assert
    assert_1.default.strictEqual(sum, 30);
});
it("get the street number for a person", function () {
    // arrange
    var pers = {
        name: "Mako",
        birthyear: 1984,
        address: {
            street: "Vallefaret",
            streetNo: 17,
            city: "Oslo",
        },
    };
    // act
    var streetNumber = (0, index_1.getStreetNo)(pers);
    // assert
    assert_1.default.strictEqual(streetNumber, 17);
});
it("using classes", function () {
    // arrange
    var p = new index_1.PersonClass("Mako", 1984);
    var e = new index_1.Employee("ola", 1986);
    // act
    e.employeeIdNum = 12345;
    // assert
    // assert.strictEqual(p.name, 'mako');
    assert_1.default.strictEqual(p.getname(), "Mako");
    assert_1.default.strictEqual(e.getname(), "ola");
    assert_1.default.strictEqual(e.employeeIdNum, 12345);
});
it("prints an Iperson", function () {
    var person1 = { name: "Mako", birthyear: 1984 };
    var person2 = { name: "Ola", birthyear: 1986, drummer: false };
    // act
    var person1Address = (0, index_1.getPersonNameString)(person1);
    var person2Address = (0, index_1.getPersonNameString)(person2);
    // assert
    assert_1.default.strictEqual(person1Address, "Mako, 1984");
    assert_1.default.strictEqual(person2Address, "Ola, 1986");
});
it("uses union types to allow null", function () {
    // act
    var result1 = (0, index_1.printThis)(undefined);
    var result2 = (0, index_1.printThis)(null);
    // assert
    assert_1.default.strictEqual(result1, "no person supplied");
    assert_1.default.strictEqual(result2, "no person supplied");
    // both of these lines fail, because we require a parameter in the printThis function
    // enter Union type: a parameter can have one of a list of types => check the index.ts
});
it("optional parameters", function () {
    // act
    var sum = (0, index_1.optionallyAdd2)(1, 2, 3, 4, 5);
    // assert
    assert_1.default.strictEqual(sum, 3);
});
it("rest parameters print names", function () {
    // act
    var greeting1 = (0, index_1.greetPeople)("Hello");
    var greeting2 = (0, index_1.greetPeople)("Hello", "Marcus");
    var greeting3 = (0, index_1.greetPeople)("Hello", "Marcus", "Dasha");
    var greeting4 = (0, index_1.greetPeople)("Hello", "Marcus", "Dasha", "David");
    var greeting5 = (0, index_1.greetPeople)("Hello", "Marcus", "Dasha", "David", "Julia", "Wietse", "Lucas");
    // assert
    assert_1.default.strictEqual(greeting1, "Hello");
    assert_1.default.strictEqual(greeting2, "Hello", "Marcus");
    assert_1.default.strictEqual(greeting3, "Hello Marcus and Dasha");
    assert_1.default.strictEqual(greeting4, "Hello Marcus and Dasha and David");
    assert_1.default.strictEqual(greeting5, "Hello Marcus and Dasha and David and Julia and Wietse and Lucas");
});
//Generic
it("add to list", function () {
    //arrange
    var listOfPeople = [{ name: "Mako", birthyear: 1984 }];
    var litsOfAddresses = [
        { street: "Vallefaret", streetNo: 17, city: "Oslo" },
        { street: "Møllerveien", streetNo: 12, city: "Oslo" },
    ];
    //act
    var numberOfPeople = (0, index_1.AddToStart)(listOfPeople, {
        name: "David",
        birthyear: 1975,
    });
    var numberOfAddresses = (0, index_1.AddToStart)(litsOfAddresses, {
        street: "Champs Elysee",
        streetNo: 1,
        city: "Paris",
    });
    //assert
    assert_1.default.strictEqual(numberOfPeople[0].name, "David");
    assert_1.default.strictEqual(numberOfAddresses[0].city, "Paris");
});
it("wrapper for addresses", function () {
    // arrange
    var listOfAddresses = [
        { street: "Vallefaret", streetNo: 17, city: "Oslo" },
        { street: "SchraeschazschStrasse", streetNo: 2, city: "Amsterdam" },
        { street: "Champs Elysee", streetNo: 1, city: "Paris" },
    ];
    //act
    var list = new index_1.Wrapper(listOfAddresses);
    //assert
    assert_1.default.strictEqual(list.getFirst().city, "Oslo");
    assert_1.default.strictEqual(list.getFirst().city, "Paris");
});
it("wrapper for names", function () {
    // arrange
    var listOfNames = [
        { name: "Mako", birthyear: 1984 },
        { name: "ola", birthyear: 1986 },
        { name: "pepe", birthyear: 2020 },
    ];
    //act
    var list2 = new index_1.Wrapper(listOfNames);
    //assert
    assert_1.default.strictEqual(list2.getFirst().name, "Mako");
    assert_1.default.strictEqual(list2.getLast().name, "pepe");
});
