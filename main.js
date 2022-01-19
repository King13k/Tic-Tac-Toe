
var newGame = new Game();
// querySelectors
var gameBoard = document.querySelector('.game-board');
var playerTurn = document.querySelector('.current-turn');
var sunWin = document.querySelector('.player1-wins');
var moonWin = document.querySelector('.player2-wins');
var displayWinner = document.querySelector('.winner');
var drawMessage = document.querySelector('.draw');

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
    newGame.declareWinner();
    newGame.declareDraw();

    showCurrentPlayer();
    return;
  }
}

function declareSunWin() {
 sunWin.innerHTML = `${newGame.sun.wins}`;
 displayWinner.innerHTML = `<h1 class='win-message'>Sun Wins!</h1>`;
}

function declareMoonWin() {
 moonWin.innerHTML = `${newGame.moon.wins}`;
 displayWinner.innerHTML = `<h1 class='win-message'>Moon Wins!</h1>`;
}

function declareTie() {
  if (newGame.draw === true) {
  displayWinner.innerHTML = `<h1 class='win-message'>It's a Tie!</h1>`
  setTimeout(resetGame, 2000);
  }
}

 function showCurrentPlayer() {
   if (newGame.sunTurn) {
     playerTurn.innerHTML = `<h1>${newGame.currentPlayer.token}, Your UP!</h1>`
   } else if (newGame.moonTurn) {
     playerTurn.innerHTML = `<h1>${newGame.currentPlayer.token}, Your UP!</h1>`
   }
 }

 function resetGame() {
   gameBoard.innerHTML =  `<div class="square square1" id=1></div>
    <div class="square square2" id=2></div>
    <div class="square square3" id=3></div>
    <div class="square square4" id=4></div>
    <div class="square square5" id=5></div>
    <div class="square square6" id=6></div>
    <div class="square square7" id=7></div>
    <div class="square square8" id=8></div>
    <div class="square square9" id=9></div>`
    showCurrentPlayer();
    // newGame.moon.wins = 0;
    // newGame.sun.wins = 0;
    newGame.turnsTaken = 0;
    newGame.squares = ['','','','','','','','',''];
 }

  function hide(element) {
  element.classList.add('hidden');
 }

 function show(element) {
   element.classList.remove('hidden');
}
