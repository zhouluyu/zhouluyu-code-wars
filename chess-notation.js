// https://www.codewars.com/kata/58aa498d2223a30e4f00003e

function chessNotation(notation) {
	const matches = notation.match(/[1-8]/g);

	const emptySquare = '*';
	matches.map((x, i) => {
		notation = notation.replace(x, emptySquare.padStart(x, '*'));
	})

	let board = notation.split('/');
	let newBoard = [];

	board.map((x, i) => {
		board[i] = board[i].split('');
		newBoard[i] = [];
		board[i].map((y, j) => {
			newBoard[i][j] = board[7-j][i];
		})
	})

	newBoard.map((x, i) => {
		newBoard[i] = newBoard[i].join('');
	})

	let newNotation = newBoard.join('/');
	const squares = newNotation.match(/[\*]+/g);

	squares.map((x, i) => {
		newNotation = newNotation.replace(x, x.length);
	})

	return newNotation;
}