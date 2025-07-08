import { useState, useEffect } from 'react';
import styles from './App.module.css';

function App() {
	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const OPERATORS = ['+', '-'];
	const OTHER_BUTTONS = ['C', '='];

	const operations = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
	};

	function calculateResult() {
		if (!operand1 || !operand2 || !operator || !operations[operator]) return;

		const result = operations[operator](parseInt(operand1), parseInt(operand2));
		setOperand1(result.toString());
		setOperand2('');
		setOperator('');
	}

	function clearResult() {
		setOperand1('');
		setOperand2('');
		setInputCalc('');
		setOperator('');
	}

	const ALL_BUTTONS = [...NUMS, ...OPERATORS, ...OTHER_BUTTONS];

	function handleNumber(value) {
		if (operator === '') {
			setOperand1((prev) => prev + value);
		} else if (operand1 !== '' && operator !== '') {
			setOperand2((prev) => prev + value);
		}
	}

	function handleOperator(value) {
		if (operand1 && operator === '') {
			setOperator(value);
		}
	}

	function handlerClick(e) {
		const value = e.target.textContent;

		switch (true) {
			case NUMS.includes(value):
				handleNumber(value);
				break;
			case OPERATORS.includes(value):
				handleOperator(value);
				break;
			case value === 'C':
				clearResult();
				break;
			case value === '=':
				calculateResult();
				break;
		}
	}
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [inputCalc, setInputCalc] = useState('');

	useEffect(() => {
		const newInputCalc = `${operand1 || ''} ${operator || ''} ${
			operand2 || ''
		}`.trim();
		setInputCalc(newInputCalc);
	}, [operand1, operator, operand2]);

	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<div className={styles.display}>{inputCalc || '0'}</div>
				<div className={styles.buttonsGrid}>
					{ALL_BUTTONS.map((value) => {
						return (
							<button
								key={value}
								className={styles.button}
								onClick={handlerClick}
							>
								{value}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
