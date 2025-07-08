import styles from './stepslist.module.css';

export const StepsList = ({ steps, activeIndex, handlerButtonStepClick }) => {
	return (
		<ul className={styles['steps-list']}>
						{steps.map((step) => {
							return (
								<li
									key={step.id}
									className={
										styles['steps-item'] +
										' ' +
										(activeIndex === Number(step.id)
											? styles.active
											: '') +
										' ' +
										(activeIndex > Number(step.id) ? styles.done : '')
									}
								>
									<button
										key={step.id}
										className={styles['steps-item-button']}
										onClick={handlerButtonStepClick}
									>
										{Number(step.id)}
									</button>
									Шаг {Number(step.id)}
								</li>
							);
						})}
					</ul>
	);
}