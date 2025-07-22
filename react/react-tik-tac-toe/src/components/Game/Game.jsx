import { StartGame } from '../StartGame/StartGame.jsx';
import { useEffect, useState } from 'react';
import { Information } from '../Information/Information.jsx';
import { Field } from '../Field/Field.jsx';
import { Button } from '../button/Button.jsx';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

export const Game = () => {
	const [isGameStarted, setIsGameStarted] = useState(false);

	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);

	const [isDraw, setIsDraw] = useState(false);

	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	function clearAllStates() {
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
		setCurrentPlayer('X');
	}

	const handleStartGame = () => {
		clearAllStates();
		setIsGameStarted(true);
	};

	function processGameTurn() {
		if (isGameEnded) return;
		const isFieldFull = field.every((value) => value !== '');
		const isCurrentPlayerWinner = WIN_PATTERNS.some((indexes) =>
			indexes.every((value) => field[value] === currentPlayer),
		);

		if (isCurrentPlayerWinner) {
			setIsGameEnded(true);
			return;
		}

		if (isFieldFull) {
			setIsGameEnded(true);
			setIsDraw(true);
			return;
		}
		setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
	}

	useEffect(() => {
		if (field.every((value) => value === '')) return;
		processGameTurn();
	}, [field]);

	const onClickButton = (e) => {
		const index = Number(e.target.dataset.index);
		if (field[index] !== '' || isGameEnded) return;
		setField((prev) => [
			...prev.slice(0, index),
			`${currentPlayer}`,
			...prev.slice(index + 1, 9),
		]);
	};

	return (
		<>
			{isGameStarted ? (
				<>
					<Information
						isGameStarted={isGameStarted}
						isDraw={isDraw}
						currentPlayer={currentPlayer}
						isGameEnded={isGameEnded}
					/>
					<Field
						field={field}
						onClick={onClickButton}
						isGameEnded={isGameEnded}
					/>
					{isGameEnded ? (
						<Button onClick={handleStartGame}>Начать заново</Button>
					) : null}
				</>
			) : (
				<StartGame handleStartGame={handleStartGame}>Начать игру</StartGame>
			)}
		</>
	);
};
