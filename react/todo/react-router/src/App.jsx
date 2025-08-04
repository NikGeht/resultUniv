import { useEffect } from 'react';
import './App.scss';
import { ModalWindow } from './components/ModalWindow/ModalWindow';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { TaskPage } from './pages/TaskPage/TaskPage.jsx';
import { useTodo } from './store/useTodo.js';
import { todoSortAndFilter } from './utils/todoSortAndFilter.js';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.jsx';

function App() {
	const {
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
	} = useTodo();

	useEffect(() => {
		handleFetchTodo();
	}, []);

	const filteredTodos = todoSortAndFilter(searchFilter, sort, todos);

	return (
		<>
			{isModalOpen && (
				<ModalWindow
					handlerToggleModal={handlerToggleModal}
					requestAddTodo={handleAddTodo}
				/>
			)}
			<Routes>
				<Route
					path='/'
					element={
						<MainPage
							search={search}
							searchHandler={handleSearchInput}
							filteredTodos={filteredTodos}
							handleUpdateTodo={handleUpdateTodo}
							handleDeleteTodo={handleDeleteTodo}
							handlerToggleModal={handlerToggleModal}
							handlerSort={handlerSort}
							sort={sort}
						/>
					}
				></Route>
				<Route
					path='/task/:id'
					element={
						<TaskPage
							todos={todos}
							handleUpdateTodo={handleUpdateTodo}
							handleDeleteTodo={handleDeleteTodo}
						/>
					}
				></Route>
				<Route path='/404' element={<NotFoundPage />} />
				<Route path='*' element={<Navigate to='/404' />} />
			</Routes>
		</>
	);
}

export default App;
