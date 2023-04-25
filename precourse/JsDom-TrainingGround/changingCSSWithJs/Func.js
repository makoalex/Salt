// function verify() {
//   const selectClass = document.querySelector(".mainResult");

//   for (let i = 0; i < selectClass.length; i++) {
//     const inner = selectClass.textContent;
//     if (Number(inner[i] === NaN)) {
//       return;
//     }
//     if (Number(inner[i] < 0)) {
//       inner[i].classList.add("negativeResult");
//       return;
//     }
//     inner[i].classList.add("positiveResult");
//     return;
//   }
// }
// verify();
function sort() {
  const mainRes = document.getElementsByClassName("mainResult");

  for (let i = 0; i < mainRes.length; i++) {
    const numRes = Number(mainRes[i].innerText);
    console.log(numRes);
    if (Number.isNaN(numRes)) {
    }
    if (numRes < 0) {
      mainRes[i].classList.add("negativeResult");
    }
    if (numRes > 0) {
      mainRes[i].classList.add("positiveResult");
    }
  }
}

//ADDING EVENT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
  console.log("Document is loaded y'all");
  sort();
});
// Making a button to invert the colors of the headings
// function invertColor() {
//   const select = document.querySelector(".mainResult");
//   for (let i = 0; i < select.length; i++) {
//     const element = select[i];
//     console.log(element.textContent);

//     if (element.classList.contains("positiveResult")) {
//       element.classList.remove("positiveResult");
//       element.classList.add("negativeResult");
//       continue;
//     }
//     if (element.classList.contains("negativeResult")) {
//       element.classList.remove("negativeResult");
//       element.classList.add("positiveResult");
//       continue;
//     }
//   }
// }
const btn = document.querySelector('#one');
btn.addEventListener('click', () =>{
    const select = document.querySelector(".mainResult");
  for (let i = 0; i < select.length; i++) {
    const element = select[i];
    console.log(element.textContent);

    if (element.classList.contains("positiveResult")) {
      element.classList.remove("positiveResult");
      element.classList.add("negativeResult");
      continue;
    }
    if (element.classList.contains("negativeResult")) {
      element.classList.remove("negativeResult");
      element.classList.add("positiveResult");
      continue;
    }
  }

})
