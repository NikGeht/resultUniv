import './todosFooter.scss';

export const TodosFooter = ({ handlerToggleModal, handlerSort, sort }) => {
	return (
		<>
			<div className='footer'>
				<div className='footer__buttons'>
					<button className='add' onClick={handlerToggleModal}>
						Добавить задачу
					</button>
					<button className='add' onClick={handlerSort}>
						{sort === 'asc' ? 'Сортировка включена' : 'Сортировка выключена'}
					</button>
				</div>
			</div>
		</>
	);
};
