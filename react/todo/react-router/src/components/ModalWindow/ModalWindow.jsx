import './modalWindow.scss';
import { useState, useRef } from 'react';
import * as yup from 'yup';

const inputTaskSchema = yup.string().min(1, 'Название не должно быть пустым');

export const ModalWindow = ({ handlerToggleModal, requestAddTodo }) => {
	const [title, setTitle] = useState('');
	const [error, setError] = useState('');

	const inputRef = useRef(null);

	if (inputRef.current) {
		inputRef.current.focus();
	}

	const handlerInput = (e) => {
		setTitle(e.target.value);
		validateInput(inputTaskSchema, e.target.value);
	};

	const validateInput = (schema, value) => {
		let errorMessage = null;
		try {
			schema.validateSync(value);
		} catch ({ errors }) {
			errorMessage = errors
				.reduce((message, error) => message + error + 'n', '')
				.trim();
		}
		setError(errorMessage);
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		const newTodo = {
			title,
			completed: false,
		};
		requestAddTodo(newTodo);
		handlerToggleModal();
	};

	return (
		<div className='modalWindow'>
			<form className='modalWindow__form' onSubmit={handlerSubmit}>
				<textarea
					ref={inputRef}
					placeholder='Введите название задачи'
					className='form__input'
					name='title'
					type='textarea'
					value={title}
					onChange={handlerInput}
				></textarea>
				{error && <div className='input__error'>{error}</div>}

				<div className='form_buttons'>
					<button
						className='form__button add'
						type='submit'
						disabled={error || !title ? true : false}
					>
						Добавить
					</button>
					<button
						className='form__button reset'
						type='reset'
						onClick={handlerToggleModal}
					>
						Отмена
					</button>
				</div>
			</form>
		</div>
	);
};
