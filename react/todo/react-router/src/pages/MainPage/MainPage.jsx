import { TodosFooter } from '../../components/TodosFooter/TodosFooter.jsx';
import { TodosHead } from '../../components/TodosHead/TodosHead.jsx';
import { TodosList } from '../../components/TodosList/TodosList.jsx';

export const MainPage = ({
	search,
	searchHandler,
	filteredTodos,
	handlerToggleModal,
	handlerSort,
	sort,
}) => {
	return (
		<div className='todo-container'>
			<div className='todos'>
				<TodosHead
					search={search}
					searchHandler={searchHandler}
					headerText='Задачи'
				/>
				<TodosList filteredTodos={filteredTodos} />
				<TodosFooter
					handlerToggleModal={handlerToggleModal}
					handlerSort={handlerSort}
					sort={sort}
				/>
			</div>
		</div>
	);
};
