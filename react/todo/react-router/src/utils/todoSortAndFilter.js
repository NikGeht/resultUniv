export const todoSortAndFilter = (filter, sort = false, todos) => {
	let filteredTodos = [...todos];
	if (filter) {
		filteredTodos = [...todos].filter((todo) =>
			todo.title.toLowerCase().includes(filter.toLowerCase())
		);
	}

	if (sort === 'asc') {
		filteredTodos = filteredTodos.sort((a, b) =>
			a.title.localeCompare(b.title)
		);
	}

	return filteredTodos;
};
