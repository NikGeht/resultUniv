import { ref, set, push, remove, get } from 'firebase/database';
import { db } from '../db/firebase';

export const fetchTodos = async () => {
	const todoDbRef = ref(db, 'todos');
	try {
		const snapshot = await get(todoDbRef);

		const data = snapshot.val();
		console.log(data);
		return Object.keys(data).map((key) => ({
			id: key,
			...data[key],
		}));
	} catch (error) {
		console.error('Ошибка при получении задач:', error);
		throw error;
	}
};

export const updateTodo = async (id, todoData) => {
	const todoRef = ref(db, `todos/${id}`);
	try {
		await set(todoRef, todoData);
	} catch (error) {
		console.error('Ошибка при обновлении задачи:', error);
		throw error;
	}
};

export const deleteTodo = async (id) => {
	const todoRef = ref(db, `todos/${id}`);
	try {
		await remove(todoRef);
	} catch (error) {
		console.error('Ошибка при удалении задачи:', error);
		throw error;
	}
};

export const createTodo = async (todoData) => {
	const todoRef = ref(db, 'todos');
	try {
		const newTodoRef = await push(todoRef, todoData);
		return {
			id: newTodoRef.key,
			...todoData,
		};
	} catch (error) {
		console.error('Ошибка при создании задачи:', error);
		throw error;
	}
};
