 //  making an object with own methods

 const myMath = {
    pi : '3.14159',
    square: function(num){
        return num *num
    },
    cube: function(num){
        return num ** 3;
    }
 }
 myMath.cube(2);
  
 //KEYWORD THIS
  const myPepe = {
    name: 'Pepe',
    look: 'silly billy',
    colour: 'choco puff',
    summary (){
        console.log(`${this.name}, also known as ${this.look}, is the colour of a ${this.colour}.`)
    }
  }
  myPepe.summary();

  //egg situation
  const mychick = {
    name: 'Helen',
    eggCount: 0,
    layEgg(){
        this.eggCount +=1;
        console.log('EGG')
    }
  }
  mychick.layEgg(); 