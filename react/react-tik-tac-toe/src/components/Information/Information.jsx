import { InformationLayout } from './InformationLayout/InformationLayout.jsx';
import { Timer } from '../Timer/Timer.jsx';
import PropTypes from 'prop-types';

export const Information = ({ currentPlayer, isDraw, isGameEnded, isGameStarted }) => {
	let playerMove =
		!isDraw && !isGameEnded ? (
			<span>
				Текущий ход: <span className={`header__info__move`}>{currentPlayer}</span>
			</span>
		) : null;
	const timer =
		!isDraw && !isGameEnded ? (
			<span>
				Текущее время игры:{' '}
				<Timer isGameStarted={isGameStarted} isGameEnded={isGameEnded} />{' '}
			</span>
		) : null;
	const winOrDraw = isGameEnded ? (
		!isDraw ? (
			<span>
				Победа: <span className={`header__info__move`}>{currentPlayer}</span>
			</span>
		) : (
			<span>
				<span className={`header__info__move`}>Ничья</span>
			</span>
		)
	) : null;

	return (
		<>
			<InformationLayout
				playerMove={playerMove}
				timer={timer}
				winOrDraw={winOrDraw}
			/>
		</>
	);
};

Information.propTypes = {
	gameTimer: PropTypes.string,
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};
