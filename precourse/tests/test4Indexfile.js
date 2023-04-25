const assert = require("assert");

describe("greet function", () => {
  it("should greet Mako properly", () => {
    //arrange
    const greeter = require("./index.js");
    //act
    const actualResult = greeter.greet("Mako");
    //assert
    assert.equal("Welcome to Salt, Mako", actualResult);
  });
});
// Eliza name check
describe("greet function", () => {
  it("should greet Eliza this time", () => {
    //arrange
    const greetings = require("./index.js");
    //act
    const result = greetings.greet("Eliza");
    //assert
    assert.equal("Welcome to Salt, Eliza", result);
  });
});

//empty string check

describe("greet function", () => {
  it('should give error message for " "', () => {
    //arrange
    const messageErr = require("./index.js");
    //act
    const finalRes = messageErr.greet(" ");
    //asserting
    assert.equal("Attention empty field", finalRes);
  });
});

// // should plural greeting for Eliza and Mako
describe("greet function", () => {
  it("should plural greeting for Eliza and Mako", () => {
    //arrange
    const plural = require("./index.js");
    //act
    const finalplural = plural.greet("Eliza and Mako");
    //assert
    assert.equal("Welcome to Salt, Eliza and Mako", finalplural);
  });
});
