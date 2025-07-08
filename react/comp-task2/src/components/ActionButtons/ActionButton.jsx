import styles from './actionButton.module.css';

export const ActionButtons = ({
	backHandlerClick,
	nextHandlerClick,
	startAgainHandlerClick,
	isFirstItem,
	isLastItem
}) => {
	return (
		<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={backHandlerClick}
							disabled={isFirstItem}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={nextHandlerClick}
							disabled={isLastItem}
						>
							Далее
						</button>
						<button
							className={styles.button}
							onClick={startAgainHandlerClick}
							disabled={isFirstItem}
						>
							Начать сначала
						</button>
					</div>
	);
}