// const myFakeRequest = (url) => {
//   new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if ((rand < 0, 7)) {
//         resolve("your fake stuff");
//       }
//       reject("that went poorly");
//     }, 1000);
//   });
// };

// myFakeRequest("/dogs.page1")
//   .then((data) => {
//     console.log(`here is:${data}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const changeBackground = (colour, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = colour;
      resolve();
    }, delay);
  });
};

changeBackground("orange", 1000)
.then(() => changeBackground("pink", 1000))
.then(() => changeBackground("grey", 1000))
.then(() => changeBackground("pink", 1000));

function CheckNums(num1, num2) {
  if (num2 > num1) return 'true'
  if (num2 === num2) return 'false'
  return '-1'}

  CheckNums(1,4)
  CheckNums(1,1)
  CheckNums(4,1)