const fs = require("fs");
const foldername = process.argv[2];

try {
  fs.mkdirSync(foldername);
  fs.writeFileSync(`${foldername}/pepe.js `,'' );
  fs.writeFileSync(`${foldername}/baba.js`,'');
  fs.writeFileSync(`${foldername}/booboo.js`, '');
} catch (e) {
  console.log(e);
  console.log("something went wrong");
}

// //process,argv in node js
// const args = process.argv.slice(2);
// for(let arg of args){
//     console.log(`hi there ${arg}`);
// }
