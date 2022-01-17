class Game {
  constructor() {
    this.sun = new Player("sun","🌝",1);
    this.moon = new Player("moon","🌚",2);
    this.turnsTaken = 0;
    this.sunTurn = true;
    this.moonTurn = false;
    this.currentPlayer = this.sun;
    this.squares = ['','','','','','','','','']
    // this.squares is for win condition
  }

  updateSquare(squareId) {
    var currentSquare = squareId;
    this.squares[currentSquare] = this.currentPlayer.token;
  }

  switchTurns() {
    if(this.sunTurn === true) {
      this.moonTurn = true;
      this.sunTurn = false;
      this.currentPlayer =  this.moon;
    } else if (this.moonTurn === true) {
      this.sunTurn = true;
      this.moonTurn = false;
      this.currentPlayer = this.sun;
    }
  }
}
