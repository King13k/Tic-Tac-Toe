// querySelectors
var boardSpaces = document.querySelectorAll('.square');
var gameBoard = document.querySelector('.game-board');
var playerTurn = document.querySelector('.current-turn');

//Event Listeners
gameBoard.addEventListener('click', placeToken);

//Global Variables
var newGame = new Game();

function placeToken(event) {
  var clickedSquare = event.target;
  var squareId = event.target.id;
  if (!clickedSquare.innerHTML) {
    clickedSquare.innerHTML = `${newGame.currentPlayer.token}`;
    newGame.updateSquare(squareId);
    newGame.switchTurns();
    console.log(newGame.currentPlayer)
    newGame.turnsTaken += 1;
    showCurrentPlayer();
    return;
  }
}

 function showCurrentPlayer() {
   if (newGame.sunTurn) {
     playerTurn.innerHTML = `<h1>${newGame.currentPlayer.token}, Your Turn</h1>`
   } else if (newGame.moonTurn) {
     playerTurn.innerHTML = `<h1>${newGame.currentPlayer.token}, Your Turn</h1>`
   }

 }
