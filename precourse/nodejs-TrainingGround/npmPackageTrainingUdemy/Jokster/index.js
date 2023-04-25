const randomJoke = require('give-me-a-joke');
const colours = require('colors');

randomJoke.getRandomDadJoke(function (joke){
    console.log(colours.rainbow  (joke));

})