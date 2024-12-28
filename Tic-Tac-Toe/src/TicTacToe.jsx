import React, { useState, useEffect } from "react";
function TicTacToe() {

	const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
	const [currentMove, setCurrentMove] = useState('O');

	const [moveX, setMoveX] = useState('Player: X');
	const [moveO, setMoveO] = useState('Player: O');
	useEffect(() => {
		console.log(board);
		checkWinner();
		setCurrentMove(currentMove === 'X' ? 'O' : 'X');
	}, [board]);

	function handleMoves(index) {
		const newBoard = [...board];
		newBoard[index] = currentMove;
		setBoard(newBoard);



	}


	function checkWinner() {
		const winningCombinations = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
			[0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
			[0, 4, 8], [2, 4, 6] // Diagonal
		];
		winningCombinations.forEach(combo => {
			const [a, b, c] = combo;

			if (board[a] && board[a] === board[b] && board[b] === board[c]) {
				showResult();

			}

		});
	}
	function showResult() {
		if (currentMove == 'X') {
			setMoveX('WINNER');
		}
		else {
			setMoveO('WINNER');
		}
		document.querySelectorAll('.moves').forEach(button=>{
			button.disabled=true;
		});
	}

	function reset() {
		setBoard(['', '', '', '', '', '', '', '', '']);
		setCurrentMove('O');
		setMoveX('Player: X');
		setMoveO('Player: O');
	}
	return (
		<div className="container">
			<h1>Tic-Tac-Toe</h1>
			<div className="info">
				<h2>{moveX} </h2>
				<h2>{moveO}</h2>
			</div>
			<div className="row">
				{board.slice(0, 3).map((object, index) => (
					<button key={index} className="moves"
						disabled={object !== ''}
						onClick={() => handleMoves(index)}>{object}</button>
				))}
			</div>
			<div className="row">
				{board.slice(3, 6).map((object, index) => (
					<button key={index + 3} className="moves"
						disabled={object !== ''}
						onClick={() => handleMoves(index + 3)}
					>{object}</button>
				))}
			</div>
			<div className="row">
				{board.slice(6, 9).map((object, index) => (
					<button key={index + 6} className="moves"
						disabled={object != ''}
						onClick={() => handleMoves(index + 6)}
					>{object}</button>
				))}
			</div>

			<button className="reset-button" onClick={reset}>Reset</button>

		</div>
	);
}

export default TicTacToe;