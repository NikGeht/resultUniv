import './informationLayout.scss';
import PropTypes from 'prop-types';

export const InformationLayout = ({ timer, playerMove, winOrDraw }) => {
	return (
		<header className={`header`}>
			<h1 className={`header__title`}>Tik-tac-toe</h1>
			<div className={`header__info`}>
				{timer}
				{playerMove}
				{!playerMove ? winOrDraw : null}
			</div>
		</header>
	);
};

InformationLayout.propTypes = {
	timer: PropTypes.element || null,
	playerMove: PropTypes.element || null,
	winOrDraw: PropTypes.element || null,
};
