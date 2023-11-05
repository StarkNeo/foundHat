const prompt = require('prompt-sync')({sigint: true});
const {createFields}= require('./fields');

class Field {
  constructor(field) {
    this._field = field;
    this._locationX = 0;
    this._locationY = 0;
    this._myPosition =[0,0];
    
  }
  get field() {return (this._field.map(element=>element.join(' '))).join('\n')}
    
  get position(){return this._myPosition=[this._locationX,this._locationY];}

  getStatusOnGame(object){
    let isPlaying = object !== 'O' && object !== '^';
    object === 'O'? this.endGameReason(5):object ==='^'?this.endGameReason(6):''; 
    return isPlaying;           
  }

  endGameReason(code){
    switch (code) {
        case 1:
            console.log("you can not move to the right");
            break;
        case 2:
            console.log("you can not move to the left");
            break;
        case 3:
            console.log("you can not move down");
            break;
        case 4:
            console.log("you can not move to up");
            break;
        case 5:
            console.log("You have fallen in a hole, game over!");
            break;
        case 6:
            console.log("You have found the hat, congratulations!");
            break;
        default:
            break;
    }
  }
  
  setLocation (direction){
    if (direction === "R") {
        this._locationX === 3? this.endGameReason(1) : this._locationX+=1;
        let [x,y] = this.position;
        let status = this.getStatusOnGame(this._field[y][x]);
        status ? this._field[y][x]='*':this._field[y][x]
        return status;      
    }
    else if(direction === "L"){
        this._locationX === 0? this.endGameReason(2) :this._locationX-=1;
        let [x,y] = this.position;
        let status = this.getStatusOnGame(this._field[y][x]);
        status ? this._field[y][x]='*':this._field[y][x]
        return status;
    }
    else if(direction === "D"){
        this._locationY === 3? this.endGameReason(3): this._locationY+=1;
        let [x,y] = this.position;
        let status = this.getStatusOnGame(this._field[y][x]);
        status ? this._field[y][x]='*':this._field[y][x]
        return status;
    }
    else if(direction ==="U"){
        this._locationY === 0? this.endGameReason(4): this._locationY-=1;
        let [x,y] = this.position;
        let status = this.getStatusOnGame(this._field[y][x]);
        status ? this._field[y][x]='*':this._field[y][x]
        return status;
    }
    
  };
  
  playGame(){
    console.log(this.field);
    let isPlaying = prompt('Do you want to play?: "Yes"/"No" ').toUpperCase();
    while (isPlaying==="YES") {
        let question = prompt("Input a direction; 'D' to go Down, 'U' to go up, 'R' to go right and 'L' to go left: ").toUpperCase();
        let continuar= this.setLocation(question);
        console.log(this.field)
        continuar ? isPlaying = "YES":isPlaying="NO"
    }
   
  }  
}

const test= new Field(createFields());
test.playGame();
