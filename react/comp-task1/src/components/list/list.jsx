import styles from './list.module.css';

export const List = (props) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.header}>{props.header}</h2>
			{props.data.length === 0 && <p>Нет добавленных элементов</p>}
			{props.data.length !== 0 && <ul className={styles.list}>
				{props.data.map((listItem) => {
					return (
						<li className={styles.item} key={listItem.id}>
							<span>{listItem.value}</span>
							<span className={styles.date}>{listItem.timeStamp}</span>
						</li>
					);
				})}
			</ul>}


		</div>
	);
};
