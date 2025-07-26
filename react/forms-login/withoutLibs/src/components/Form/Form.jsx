import { useFormValidation } from '../../hooks/useFormValidation.js';
import { isDisableSubmit } from '../../utils/validaiton.js';
import { useRef, useEffect } from 'react';

import { FormField } from '../FormField/FormField.jsx';
import { FormHeader } from '../FormHeader/FormHeader.jsx';

import './Form.scss';

export const Form = () => {
	const { handleChange, handleBlur, getState } = useFormValidation();
	const { email, password, confirm_password, errors } = getState();

	const refSubmitButton = useRef(null);

	useEffect(() => {
		if (isDisableSubmit(errors, getState())) {
			refSubmitButton.current.focus();
		}
	}, [errors]);

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log({ email, password, confirm_password });
	};

	return (
		<div className='center-wrapper'>
			<div className='form-container'>
				<FormHeader title={'Регистрация'} />
				<form onSubmit={handleSubmit} className='form'>
					<FormField
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.email}
						name='email'
						type='email'
						placeholder='Введите email'
						value={email}
					/>
					<FormField
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.password}
						name='password'
						type='password'
						placeholder='Введите пароль'
						value={password}
					/>
					<FormField
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.confirm_password}
						name='confirm_password'
						type='password'
						placeholder='Введите повторно пароль'
						value={confirm_password}
					/>
					<button
						ref={refSubmitButton}
						type='submit'
						className='form__button'
						disabled={!isDisableSubmit(errors, getState())}
					>
						Отправить
					</button>
				</form>
			</div>
		</div>
	);
};
