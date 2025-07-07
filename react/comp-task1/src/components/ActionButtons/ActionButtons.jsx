import styles from './actionButtons.module.css';

import { Button } from '../button/button';

export const ActionButtons = (props) => {
	return (
		<div className={styles.container}>
			<Button value="Ввести новое" onClick={props.onInputButtonClick}></Button>
			<Button
				value="Добавить в список"
				onClick={props.onAddButtonClick}
				disabled={!props.isValueVaild}
			></Button>
		</div>
	);
};
