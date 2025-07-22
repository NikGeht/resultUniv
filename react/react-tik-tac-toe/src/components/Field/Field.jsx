import { FieldLayout } from './FieldLayout/FieldLayout.jsx';
import PropTypes from 'prop-types';

export const Field = ({ field, onClick, isGameEnded }) => {
	return (
		<FieldLayout field={field} onClickButton={onClick} isGameEnded={isGameEnded} />
	);
};

Field.propTypes = {
	field: PropTypes.array,
	onClickButton: PropTypes.func,
	isGameEnded: PropTypes.bool,
};
