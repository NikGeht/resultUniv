import styles from './error.module.css';
export const Error = ({ value }) => {
	return (
		<div className={styles.error}>{value}</div>
	);
};
