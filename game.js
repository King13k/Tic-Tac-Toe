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

  winCombinations(token) {
    if (this.squares[1] === token && this.squares[2] === token && this.squares[3] === token ||
    this.squares[4] === token && this.squares[5] === token && this.squares[6] === token ||
    this.squares[7] === token && this.squares[8] === token && this.squares[9] === token ||
    this.squares[1] === token && this.squares[4] === token && this.squares[7] === token ||
    this.squares[2] === token && this.squares[5] === token && this.squares[8] === token ||
    this.squares[3] === token && this.squares[6] === token && this.squares[9] === token ||
    this.squares[1] === token && this.squares[5] === token && this.squares[9] === token ||
    this.squares[3] === token && this.squares[5] === token && this.squares[7] === token ) {
      return true;
    }
      return false;
  }

  declareWinner() {
    var sunWin = this.winCombinations(`${this.sun.token}`);
    var moonWin = this.winCombinations(`${this.moon.token}`);
    if (sunWin) {
      this.sun.wins++
      declareSunWin();
      setTimeout(resetGame, 3000)
      return true;
    }
     if (moonWin) {
      this.moon.wins++
      declareMoonWin();
      setTimeout(resetGame, 3000)
      return true
    }
  }

  showDraw() {
    if(this.turnsTaken === 9 && !this.declareWinner()) {
      hide(currentTurn);
      show(drawMessage);
  }
}
 }
