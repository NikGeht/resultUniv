import { useStore } from '../../hooks/useStore.jsx'
import './Form.scss';
import {useEffect, useRef} from "react";

function validatePassword(password) {
	return password.length >= 3 && password.length <= 20 ? null : 'Пароль должен содержать от 3 до 20 символов';
}

function isError(errors) {
	return Object.values(errors).some(error => error);
}

function isDisableSubmit(errors, state) {
	return Object.values(errors).every(error => error === null) && state.password.length > 0 && state.confirm_password.length > 0 && state.email.length > 0;
}

function validateConfirmPassword(password, confirmPassword) {
	return password === confirmPassword;
}

export const Form = () => {
	const { getState, setErrors, updateState } = useStore();
	const { email, password, confirm_password, errors } = getState()
	
	const refSubmitButton = useRef(null);
	
	const onBlur = ({ target }) => {
		const { value, name } = target;
		let error = null;
		if (name === 'email') {
			error = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(value)
				? null
				: 'Неверный email';
		}
		
		
		updateState(name, value);
		setErrors(name, error);
	}
	
	const onChange = ({ target }) => {
		
		const { value, name } = target;
		updateState(name, value);
		
		let error = null;
		if (name === 'password') {
			error = validatePassword(value);
			if (value.length === 0) {
				error = 'Поле с паролем не должен быть пустым';
			} else {
				error = validatePassword(value);
			}
		}
		if (name === 'confirm_password') {
			error = value.length === 0 ? 'Поле с повторным паролем не должен быть пустым': null;
			if (value.length > 0) {
				error = validateConfirmPassword(password, value) ? null : 'Пароли не совпадают';
			}
		}
		
		setErrors(name, error);
	};
	
	useEffect(() => {
		if (isDisableSubmit(errors, getState())) {
			refSubmitButton.current.focus();
		}
	}, [errors, getState])
	

	const onSubmit = (e) => {
		e.preventDefault();
		
		if (isError(errors)) {
			return;
		}
		console.log({ email, password, confirm_password });
	};

	return (
		<div className='center-wrapper'>
			<div className='form-container'>
				<div className='form-container__header'>
					<span>Регистрация</span>
				</div>
				<form onSubmit={onSubmit} className='form'>
					<input
						type='email'
						name='email'
						placeholder='email'
						value={email}
						onBlur={onBlur}
						onChange={onChange}
						className='form__item'
					></input>
					{errors?.email && <span className='form__error'>{errors?.email}</span>}
					<input
						type='password'
						name='password'
						placeholder='password'
						value={password}
						onChange={onChange}
						className='form__item'
					></input>
					{errors?.password && <span className='form__error'>{errors?.password}</span>}
					<input
						type='password'
						name='confirm_password'
						placeholder='re-enter password'
						value={confirm_password}
						onChange={onChange}
						className='form__item'
					></input>
					{errors?.confirm_password && <span className='form__error'>{errors?.confirm_password}</span>}
					<button ref={refSubmitButton} type='submit' className='form__button' disabled={!isDisableSubmit(errors, getState())}>
						Отправить
					</button>
				</form>
			</div>
		</div>
	);
};
