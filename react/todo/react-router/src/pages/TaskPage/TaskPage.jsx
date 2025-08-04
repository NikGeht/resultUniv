import '../../../src/components/ModalWindow/modalWindow.scss';
import { useState, useRef, useEffect } from 'react';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const inputTaskSchema = yup.string().min(1, 'Название не должно быть пустым');

export const TaskPage = ({ todos, handleUpdateTodo, handleDeleteTodo }) => {
	const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [error, setError] = useState('');
	const [status, setStatus] = useState('');
	const { id } = useParams();
	const inputRef = useRef(null);
	const findTodo = todos.find((todo) => todo.id === Number(id));
	if (!findTodo) {
		navigate('/404');
	}

	useEffect(() => {
		setTitle(findTodo?.title || '');
		setStatus(findTodo?.completed ? true : false);
	}, []);

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

	const handlerSubmit = (e, id) => {
		e.preventDefault();
		const newTodo = {
			title,
			completed: status === 'true' ? true : false,
		};
		handleUpdateTodo(id, newTodo);
		navigate('/');
	};

	const handlerSelect = (e) => {
		setStatus(e.target.value);
	};

	return (
		<div className='modalWindow'>
			<form
				className='modalWindow__form'
				onSubmit={(e) => handlerSubmit(e, id)}
			>
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
				<select
					className='form__select'
					name='status'
					onChange={handlerSelect}
					value={status}
				>
					<option value=''>Выберите статус</option>
					<option value='false'>Активная</option>
					<option value='true'>Завершенная</option>
				</select>

				<div className='form_buttons'>
					<button
						className='form__button add'
						type='submit'
						disabled={error || !title ? true : false}
					>
						Изменить
					</button>
					<button
						className='form__button cancel'
						type='button'
						onClick={() => navigate(-1)}
					>
						Назад
					</button>
					<button
						className='form__button delete'
						type='button'
						onClick={() => {
							handleDeleteTodo(id);
							navigate('/');
						}}
					>
						Удалить
					</button>
				</div>
			</form>
		</div>
	);
};
