import { fetchTodos, updateTodo, deleteTodo, createTodo } from '../utils/api';
import { useStore } from './useStore';
import { useRef } from 'react';

export const useTodo = () => {
	const { getState, setState } = useStore();
	const timeoutRef = useRef(null);
	const { todos, search, searchFilter, isModalOpen, sort } = getState();

	const handleUpdateTodo = (id, newTodo) => {
		const todoId = Number(id);
		console.log(newTodo);

		const updatedTodo = {
			title: newTodo.title,
			completed: newTodo.completed,
		};

		updateTodo(todoId, updatedTodo)
			.then((response) => {
				console.log('Задача обновлена, ответ сервера:', response);
				setState(
					'todos',
					todos.map((todo) => (todo.id === todoId ? response : todo))
				);
			})
			.catch((error) => {
				console.error('Ошибка при обновлении задачи:', error);
			});
	};

	const handleFetchTodo = () => {
		fetchTodos()
			.then((response) => {
				setState('todos', response);
			})
			.catch((error) => console.error('Ошибка при получении заданий:', error));
	};

	const handleDeleteTodo = (id) => {
		const todoId = Number(id);

		deleteTodo(todoId)
			.then((response) => {
				console.log('Задача удалена, ответ сервера:', response);
				setState(
					'todos',
					todos.filter((todo) => todo.id !== todoId)
				);
			})
			.catch((error) => {
				console.error('Ошибка при удалении задачи:', error);
			});
	};

	const handleAddTodo = (newTodo) => {
		createTodo(newTodo)
			.then((response) => {
				console.log('Задача добавлена:', response);
				setState('todos', [...todos, response]);
			})
			.catch((error) => {
				console.error('Ошибка при добавлении задачи:', error);
			});
	};

	const handleSearchInput = (e) => {
		const value = e.target.value;

		setState('search', value);

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(() => {
			setState('searchFilter', value);
		}, 500);
	};

	const handlerSort = () => {
		if (sort === '') {
			setState('sort', 'asc');
		} else {
			setState('sort', '');
		}
	};

	const handlerToggleModal = () => {
		setState('isModalOpen', !isModalOpen);
	};

	return {
		handleAddTodo,
		handleDeleteTodo,
		handleSearchInput,
		handleUpdateTodo,
		handlerSort,
		handlerToggleModal,
		handleFetchTodo,
		todos,
		search,
		searchFilter,
		isModalOpen,
		sort,
		timeoutRef,
	};
};
