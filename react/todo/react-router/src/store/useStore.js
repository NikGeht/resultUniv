import { useState } from 'react';

export const useStore = () => {
	const [store, setStore] = useState({
		todos: [],
		search: '',
		searchFilter: '',
		isModalOpen: false,
		sort: '',
	});

	const getState = () => {
		return store;
	};

	const setState = (name, value) => {
		setStore((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	return {
		getState,
		setState,
	};
};
