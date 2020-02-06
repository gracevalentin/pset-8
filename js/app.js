///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
///////////////////// APP STATE (VARIABLES) /////////////////////////
let turn
let board;
let win;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));

const message = document.querySelector("h2");

function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;    // writes an X or an O on board
  });

  message.textContent = `Turn: ${turn}`;
}
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("board").onclick = takeTurn;

function takeTurn(e) {
  let index = squares.findIndex(function(square) {
    return square === e.target;
  });
}

document.getElementById("reset-button").onclick = init;

function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];
  turn = "X";
  win = null;

  render();
}

document.getElementById("reset-button").onclick = init;

///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

  render();
}

window.onload = init;

  function render() {
    board.forEach(function(mark, index) {
      console.log(mark, index);
    });
  }

  function getWinner() {
    let winner = null;

    winningConditions.forEach(function(condition, index) {
      if (
        board[condition[0]] &&
        board[condition[0]] === board[condition[1]] &&
        board[conition[1]] === board[condition[2]]
      ) {
        winner = board[condition[0]];
      }
    });

    return winner ? winner : board.includes("") ? null : "T";
  }

  function takeTurn(e) {
  if (!win) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

    board[index] = turn;
    turn = turn === "X" ? "O" : "X";
    win = getWinner();

    render();
  }
}

  function render() {
    board.forEach(function(mark, index) {
      squares[index].textContent = mark;
    });

    message.textContent = win ? `${win} wins!` : `Turn: ${turn}`;
  }
