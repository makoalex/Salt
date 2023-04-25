//FUNCTION SCOPE
let bird = 'duck';
function birdWatching() {
    let bird = 'albatros';
    console.log(bird);
}
birdWatching();
console.log(bird)
// we don't have acess to albatros outsiode of the function it belongs to

//Block Scope
 let radius = 8;
 if (radius >0) {
    let PI = 3.14159;
    let msg = 'eurika';
    console.log(PI, msg);
 }
 console.log(radius)
 //console.log (msg) we don't have access to msg outside the block of code 
 
 // LEXICAL SCOPE

 function bankRobber() {
    let heroes = ['Spiderman', 'Iron Man', 'Black widow'];
    function callForHelp(){
        for( let hero of heroes) {
            console.log(`Please help us ${hero}!!`)
        }
    }
    callForHelp()
 }
 bankRobber()
 // lexical scope shows that we have access to a parent declared variable, 
 //inside a nested function