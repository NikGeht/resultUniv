import { useState } from 'react';

import './App.css';
import { Button } from './components/button/button';
import { List } from './components/list/list';
import { Title } from './components/title/Title';
import { Error } from './components/error/error';

function App() {
	const isValueVaild = (text) => {
		return text.length < 3 ? false : true;
	};

	function onInputButtonClick() {
		const text = prompt('Введите текст: ').trim();

		if (isValueVaild(text)) {
			setError('');
			setValue(text);
		} else {
			setError('Введенное значение должно содержать минимум 3 символа');
			setValue('');
		}
	}
	function onAddButtonClick() {
		const newItemList = {
			id: new Date(),
			value,
			timeStamp: new Date()
				.toLocaleString('ru-RU', {
					day: '2-digit',
					month: '2-digit',
					year: 'numeric',
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
				})
				.replace(',', ''),
		};
		setList([...list, newItemList]);
		setValue('');
		setError('');
	}

	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	return (
		<div className="app">
			<Title value={value}></Title>
			{error !== '' && <Error value={error} />}
			<div className="buttons-container">
				<Button value="Ввести новое" onClick={onInputButtonClick}></Button>
				<Button
					value="Добавить в список"
					onClick={onAddButtonClick}
					disabled={!isValueVaild(value)}
				></Button>
			</div>
			<List header="Список:" data={list}></List>
		</div>
	);
}

export default App;
