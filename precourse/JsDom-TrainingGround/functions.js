// function companyName() {
//   return "Salt";
// }
// const name = companyName();
console.log(">salt Function loaded");
myFunctions = {
  getCompanyName: () => {
    return "SALT";
  },
};
console.log(">salt Functions loaded");
const companyName = myFunctions.getCompanyName();
document.getElementById("companyName").innerHTML = companyName;

document.getElementsByTagName("div")[0].innerHTML = companyName;
//looping over the HTML collection
const loopingOverHtmlCollection = document.getElementsByClassName("bold");
for (element of loopingOverHtmlCollection) {
  console.log((element.innerHTML += "and bold"));
  console.log(typeof element);
}
const queryUse = document.querySelector("#companyName");
queryUse.innerHTML = companyName + " set using query selector by id";

const boldNodesQuerySelected = document.querySelectorAll(".bold");
for (el of boldNodesQuerySelected)
  el.innerHTML += " and with query selected all";
  
//adding elements to html
function addListInMain1(numItems) {
  let newList = document.createElement("ul");
  for (let i =0; i<numItems; i++) {
    let newLi = document.createElement("li");
    newLi.textContent = `Items ${i+1}`;
    newList.append(newLi);
  }
  document.body.append(newList);
}

addListInMain1(3);

//removing elements
function removeHtml(passedId){
  const selectedElement = document.getElementById(passedId)
  if(selectedElement){
    selectedElement.remove();
  }
}

removeHtml(companyName)
