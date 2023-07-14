const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
class Field{
  constructor(array){
    this.fieldArray = array;

  }


print(){
    const numRows=this.fieldArray.length;
    const numColumns=this.fieldArray[0].length;
    var i = 0;
    var j = 0;
    
    while(i < numRows){
      while(j < numColumns){
        process.stdout.write(this.fieldArray[i][j]); // This does not add a new line
        j++;
      }
      console.log(); //This adds a newline
      j=0;
      i++;
    }
}



}

  


const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░']
  ]);


  const movement = (field) => {
    var i  =0;
    var j =0;


    do{
      let move = prompt("Direction (w,a,s,d): ");

      var position = field[i][j];
      //make sure to change the position to a * to let the user know that he is on that position.
      switch(move){
        case "w":
            position = field[i--][j];
            break;
        case "a":
          position = field[i][j--];
          break;
        case "s":
          position = field[i++][j];
          break;
        case "d":
          position = field[i][j++];
          break;
        default:
          console.log("Invalid Key!")
    }
  
    }while(move != "O" || move != "^");






}



main();

function main(){
  myField.print();
  movement(myField);
}



