import './todosFooter.scss';

export const TodosFooter = ({ handlerToggleModal }) => {
	return (
		<>
			<div className='footer'>
				<div className='footer__buttons'>
					<button className='add' onClick={handlerToggleModal}>
						Добавить задачу
					</button>
				</div>
			</div>
		</>
	);
};
