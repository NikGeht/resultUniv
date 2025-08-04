import { useNavigate } from 'react-router-dom';
export const TodosList = ({ filteredTodos = [] }) => {
	const navigate = useNavigate();
	const handlerListItemClick = (e, id) => {
		navigate(`/task/${id}`);
	};
	return (
		<ul>
			{filteredTodos.map((todo) => (
				<li
					data-id={todo.id}
					key={todo.id}
					className={`todos__item ${todo.completed ? 'completed' : ''}`}
					onClick={(e) => handlerListItemClick(e, todo.id)}
				>
					<span className='todos__item__title'>{todo.title}</span>
				</li>
			))}
		</ul>
	);
};
