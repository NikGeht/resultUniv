import './fieldLayout.scss';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, onClickButton, isGameEnded }) => {
	console.log('render field');
	return (
		<div className={`game__container`}>
			<div className={`game__container__field`}>
				{field.map((value, index) => {
					return (
						<button
							data-index={index}
							className={value}
							key={index}
							disabled={!!value || isGameEnded}
							onClick={(e) => onClickButton(e)}
						>
							{value}
						</button>
					);
				})}
			</div>
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	onClickButton: PropTypes.func,
	isGameEnded: PropTypes.bool,
};
