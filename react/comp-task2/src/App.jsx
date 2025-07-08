import { useEffect } from 'react';
import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';
import { StepsList } from './components/StepsList/StepsList';
import { ActionButtons } from './components/ActionButtons/ActionButton';

export const App = () => {
	const [steps, setSteps] = useState([]);
	const [activeIndex, setActiveIndex] = useState(1);

	let isFirstItem = activeIndex === 1 ? true : false;
	let isLastItem = activeIndex === data.length ? true : false;

	function nextHandlerClick() {
		setActiveIndex((prev) => {
			if (prev !== steps.length) {
				return prev + 1;
			}
		});
	}
	function backHandlerClick() {
		setActiveIndex((prev) => {
			if (prev !== 1) {
				return prev - 1;
			}
		});
	}
	function startAgainHandlerClick() {
		setActiveIndex(1);
	}
	function handlerButtonStepClick(e) {
		setActiveIndex(Number(e.target.textContent));
	}

	useEffect(() => {
		setSteps(data);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps.find(step => Number(step.id) === activeIndex)?.content}
					</div>
					<StepsList
						steps={steps}
						activeIndex={activeIndex}
						handlerButtonStepClick={handlerButtonStepClick}
					/>
					<ActionButtons
						nextHandlerClick={nextHandlerClick}
						backHandlerClick={backHandlerClick}
						startAgainHandlerClick={startAgainHandlerClick}
						isFirstItem={isFirstItem}
						isLastItem={isLastItem}
					/>
				</div>
			</div>
		</div>
	);
};
