const BASE_URL = 'http://localhost:3305';

const handleResponse = async (response) => {
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return response.status === 204 ? null : response.json();
};

export const fetchTodos = async () => {
	const response = await fetch(`${BASE_URL}/todos`);
	return handleResponse(response);
};

export const updateTodo = async (id, todoData) => {
	const response = await fetch(`${BASE_URL}/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(todoData),
	});
	return handleResponse(response);
};

export const deleteTodo = async (id) => {
	const response = await fetch(`${BASE_URL}/todos/${id}`, {
		method: 'DELETE',
	});
	return handleResponse(response);
};

export const createTodo = async (todoData) => {
	const response = await fetch(`${BASE_URL}/todos`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(todoData),
	});
	return handleResponse(response);
};
