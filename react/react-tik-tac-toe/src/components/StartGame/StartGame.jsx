import './startGame.scss';
import PropTypes from 'prop-types';

export const StartGame = ({ handleStartGame, children }) => {
	return (
		<div className={`start-game`}>
			<h1 className={`start-game__title`}>Tik-tac-toe</h1>
			<button className={`start-game__button`} onClick={handleStartGame}>
				{children}
			</button>
		</div>
	);
};

StartGame.propTypes = {
	handleStartGame: PropTypes.func.isRequired,
	children: PropTypes.children,
};
