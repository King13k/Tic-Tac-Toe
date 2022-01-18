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
    console.log(currentSquare)
    console.log(this.sun.token)
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
    if (this.squares[1] === token && this.squares[2] === token && this.squares[3] ||
    this.squares[4] === token && this.squares[5] === token && this.squares[6] ||
    this.squares[7] === token && this.squares[8] === token && this.squares[9] ||
    this.squares[1] === token && this.squares[4] === token && this.squares[7] ||
    this.squares[2] === token && this.squares[5] === token && this.squares[8] ||
    this.squares[3] === token && this.squares[6] === token && this.squares[9] ||
    this.squares[1] === token && this.squares[5] === token && this.squares[9] ||
    this.squares[7] === token && this.squares[5] === token && this.squares[3]) {
      return true;
    }
      return false;
  }

  declareWinner() {
    if (this.winCombinations(this.sun.token)) {
      this.sun.wins++
      declareSunWin();
    } else if(this.winCombinations(this.moon.token)){
      this.moon.wins++
      declareMoonWin();
    }
  }
  }
