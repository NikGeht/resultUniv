import { useState, useEffect } from 'react';
import './App.scss';

function App() {
	const [todos, setTodos] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((data) => setTodos(data))
			.catch((error) => console.error('Не удалось получить задачи:', error));
	}, []);

	const filteredTodos = todos.filter((todo) =>
		todo.title.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<>
			<div className='todo-container'>
				<div className='todos'>
					<h1 className='todos__header'>Задачи</h1>
					<input
						type='text'
						placeholder='Поиск...'
						className='todos__search'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					></input>
					<ul>
						{filteredTodos.map((todo) => (
							<li
								key={todo.id}
								className={`todos__item ${todo.completed ? 'completed' : ''}`}
							>
								<span className='todos__item__title'>{todo.title}</span>
								<input
									type='checkbox'
									className='todos__item__checkbox'
									checked={todo.completed}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
