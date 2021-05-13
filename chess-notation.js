// https://www.codewars.com/kata/58aa498d2223a30e4f00003e

function chessNotation(notation) {
	const matches = notation.match(/[1-8]/g);

	const emptySquare = '*';
	for (let i = 0; i < matches.length; i++) {
		notation = notation.replace(matches[i], emptySquare.padStart(matches[i], '*'));
	}

	let board = notation.split('/');
	let newBoard = [];

	for (let j = 0; j < 8; j++) {
		board[j] = board[j].split('');
		newBoard[j] = [];
	}

	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
		newBoard[i][j] = board[7-j][i];
		};
	}

	for (let i = 0; i < 8; i++) {
		newBoard[i] = newBoard[i].join('');
	}

	let newNotation = newBoard.join('/');
	const squares = newNotation.match(/[\*]+/g);

	for (let i = 0; i < squares.length; i++) {
		newNotation = newNotation.replace(squares[i], squares[i].length);
	}

	return newNotation;
}
  
  