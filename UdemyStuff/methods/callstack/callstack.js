// example of a callstack

// const multiply = (x, y) => x * y;
// const square = (x, x) => multiply(x, x);
// const isRightTriangle = (a, b, c) => square(a) + square(b) === square(c);

//callback hell before PROMISES
const delayColour = (newColour, delay, donext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColour;
    donext();
  }, delay);
};
delayColour("pink", 1000, () => {
  delayColour("grey", 1000, () => {
    delayColour("orange", 1000, () => {
      delayColour("olive", 1000, () => {});
    });
  });
});
