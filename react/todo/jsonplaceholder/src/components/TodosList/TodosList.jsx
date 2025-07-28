export const TodosList = ({ filteredTodos, handleCheckBoxClick }) => {
	return (
		<ul>
			{filteredTodos.map((todo) => (
				<li
					data-id={todo.id}
					key={todo.id}
					className={`todos__item ${todo.completed ? 'completed' : ''}`}
				>
					<span className='todos__item__title'>{todo.title}</span>
					<input
						type='checkbox'
						className='todos__item__checkbox'
						checked={todo.completed}
						onChange={handleCheckBoxClick}
					/>
				</li>
			))}
		</ul>
	);
};
