import styles from './title.module.css';

export const Title = (props) => {
	return (
		<>
			<h1 className={styles.header}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>
				{''}: "<output className={styles.currentValue}>{props.value}</output>
				{''}"
			</p>
		</>
	);
};
