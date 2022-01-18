var newGame = new Game();
// querySelectors
var boardSpaces = document.querySelectorAll('.square');
var gameBoard = document.querySelector('.game-board');
var playerTurn = document.querySelector('.current-turn');
var sunWin = document.querySelector('.player1-wins');
var moonWin = document.querySelector('.player2-wins');

//Event Listeners
gameBoard.addEventListener('click', placeToken);

//Global Variables

function placeToken(event) {
  var clickedSquare = event.target;
  var squareId = event.target.id;
  if (!clickedSquare.innerHTML) {
    clickedSquare.innerHTML = `${newGame.currentPlayer.token}`;
    newGame.updateSquare(squareId);
    newGame.switchTurns();
    newGame.turnsTaken += 1;
    showCurrentPlayer();
    newGame.declareWinner();
    return;
  }
}

function declareSunWin() {
 sunWin.innerHTML = `${newGame.sun.wins}`;
}

function declareMoonWin() {
 moonWin.innerHTML = `${newGame.moon.wins}`;
}

 function showCurrentPlayer() {
   if (newGame.sunTurn) {
     playerTurn.innerHTML = `<h1>${newGame.currentPlayer.token}, Your UP!</h1>`
   } else if (newGame.moonTurn) {
     playerTurn.innerHTML = `<h1>${newGame.currentPlayer.token}, Your UP!</h1>`
   }
 }

 function win(){
   console.log('sunWins');
 }

 function hide(element) {
  element.classList.add('hidden');
 }

 function show(element) {
   element.classList.remove('hidden');
 }
