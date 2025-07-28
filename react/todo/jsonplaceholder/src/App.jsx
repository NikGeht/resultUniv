import { useState, useEffect } from 'react';
import './App.scss';
import { TodosList } from './components/TodosList/TodosList';
import { TodosHead } from './components/TodosHead/TodosHead';

function App() {
	const [todos, setTodos] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((data) => setTodos(data))
			.catch((error) => console.error('Не удалось получить задачи:', error));
	}, []);

	const handleCheckBoxClick = (e) => {
		const todoId = e.target.parentElement.dataset.id;
		const newTodos = todos.map((todo) => {
			if (todo.id === Number(todoId)) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		setTodos(newTodos);
	};
	const searchHandler = (e) => {
		setSearch(e.target.value);
	};
	const filteredTodos = todos.filter((todo) =>
		todo.title.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<>
			<div className='todo-container'>
				<div className='todos'>
					<TodosHead
						search={search}
						searchHandler={searchHandler}
						headerText='Задачи'
					/>
					<TodosList
						filteredTodos={filteredTodos}
						handleCheckBoxClick={handleCheckBoxClick}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
