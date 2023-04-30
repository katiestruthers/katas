function generateBoard(whiteQueen, blackQueen) {
  /* I tried using this more succient bit of code but it was causing the 1's to repeat in every row
  const board = Array(8).fill(Array(8).fill(0)); */
  const board = [[0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]];
  board[whiteQueen[0]][whiteQueen[1]] += 1;
  board[blackQueen[0]][blackQueen[1]] += 1;
  return board;
}

function queenThreat(board) {
  let total, i, j, column;

  for (i = 0; i < 8; i++) {

    // Option 1: same row
    total = 0;
    for (j = 0; j < 8; j++) {
      total += board[i][j];
    }
    if (total === 2) {
      return true;
    }

    // Option 2: same column
    total = 0;
    for (j = 0; j < 8; j++) {
      total += board[j][i];
    }
    if (total === 2) {
      return true;
    }

    // Option 3: diagonal (bottom-left to top-right)
    total = 0;
    column = i;
    for (j = 0; j <= i; j++) {
      total += board[column][j];
      column--;
    }
    if (total === 2) {
      return true;
    }

    // top-left to bottom-right
    total = 0;
    column = i;
    for (j = 0; j < (8 - i); j++) {
      total += board[column][j];
      column++
    }
    if (total === 2) {
      return true;
    }
  }

  return false;
}

// testing
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));