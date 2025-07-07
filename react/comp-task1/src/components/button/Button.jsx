import styles from './button.module.css';

export const Button = ({ onClick, value, ...props }) => {
	return (
		<button {...props} className={styles.button} onClick={onClick}>
			{value}
		</button>
	);
};
