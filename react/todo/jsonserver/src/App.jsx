import { useEffect, useRef } from 'react';
import './App.scss';
import { TodosList } from './components/TodosList/TodosList';
import { TodosHead } from './components/TodosHead/TodosHead';
import { TodosFooter } from './components/TodosFooter/TodosFooter';
import { ModalWindow } from './components/ModalWindow/ModalWindow';
import { useStore } from './store/useStore';
import { fetchTodos, updateTodo, deleteTodo, createTodo } from './utils/api';

function App() {
	const { getState, setState } = useStore();
	const { todos, refreshTodos, isModalOpen, search, searchFilter } = getState();
	const timeoutRef = useRef(null);

	useEffect(() => {
		fetchTodos()
			.then((data) => {
				setState('todos', data);
				setState('refreshTodos', false);
			})
			.catch((error) => console.error('Не удалось получить задачи:', error));
	}, [refreshTodos]);

	const handleCheckBoxClick = (e) => {
		const todoId = e.target.parentElement.dataset.id;
		const todo = todos.find((todo) => todo.id === Number(todoId));

		if (!todo) {
			console.error('Задача не найдена');
			return;
		}

		const updatedTodo = {
			title: todo.title,
			completed: !todo.completed,
		};

		updateTodo(todoId, updatedTodo)
			.then((response) => {
				console.log('Задача обновлена, ответ сервера:', response);
				setState('refreshTodos', !refreshTodos);
			})
			.catch((error) => {
				console.error('Ошибка при обновлении задачи:', error);
			});
	};

	const handleDeleteTodo = (e) => {
		const todoId = e.target.parentElement.dataset.id;

		deleteTodo(todoId)
			.then((response) => {
				console.log('Задача удалена, ответ сервера:', response);
				setState('refreshTodos', !refreshTodos);
			})
			.catch((error) => {
				console.error('Ошибка при удалении задачи:', error);
			});
	};

	const requestAddTodo = (newTodo) => {
		createTodo(newTodo)
			.then((response) => {
				console.log('Задача добавлена:', response);
				setState('refreshTodos', !refreshTodos);
			})
			.catch((error) => {
				console.error('Ошибка при добавлении задачи:', error);
			});
	};

	const searchHandler = (e) => {
		const value = e.target.value;

		setState('search', value);

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(() => {
			setState('searchFilter', value);
		}, 500);
	};
	const filteredTodos = todos.filter((todo) =>
		todo.title.toLowerCase().includes(searchFilter.toLowerCase())
	);

	const handlerToggleModal = () => {
		setState('isModalOpen', !isModalOpen);
	};

	return (
		<>
			{isModalOpen && (
				<ModalWindow
					handlerToggleModal={handlerToggleModal}
					setRefreshTodos={() => setState('refreshTodos', !refreshTodos)}
					requestAddTodo={requestAddTodo}
				/>
			)}
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
						handleDeleteTodo={handleDeleteTodo}
					/>
					<TodosFooter handlerToggleModal={handlerToggleModal} />
				</div>
			</div>
		</>
	);
}

export default App;
