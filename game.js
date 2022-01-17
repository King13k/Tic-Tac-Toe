class Game {
  constructor() {
    this.player1 = new Player("sun","🌝",1);
    this.player2 = new Player("moon","🌚",2);
    this.turnsTaken = 0;
    this.sunTurn = true;
    this.moonTurn = false;
    this.currentPlayer = this.player1;
    this.squares = ['','','','','','','','','']
    // this.squares is for win condition
  }

  updateSquare(squareId) {
    var currentSquare = squareId;
    this.squares[currentSquare] = this.currentPlayer.token;
  }
}
