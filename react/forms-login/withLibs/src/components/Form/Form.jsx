import { FormField } from '../FormField/FormField.jsx';
import { useRef, useEffect } from 'react';

export const Form = ({
	handleSubmit,
	onSubmit,
	register,
	emailError,
	passwordError,
	confirmPasswordError,
	allFieldFilled,
}) => {
	const isDisabled = emailError || passwordError || confirmPasswordError;

	const submitButtonRef = useRef(null);

	useEffect(() => {
		if (!isDisabled && submitButtonRef.current && allFieldFilled) {
			submitButtonRef.current.focus();
		}
	}, [isDisabled, allFieldFilled]);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='form'>
			<FormField
				register={register}
				error={emailError}
				name='email'
				type='email'
				placeholder='Введите email'
			/>
			<FormField
				register={register}
				error={passwordError}
				name='password'
				type='password'
				placeholder='Введите пароль'
			/>
			<FormField
				register={register}
				error={confirmPasswordError}
				name='confirm_password'
				type='password'
				placeholder='Введите повторно пароль'
			/>
			<button
				ref={submitButtonRef}
				type='submit'
				className='form__button'
				disabled={isDisabled}
			>
				Отправить
			</button>
		</form>
	);
};
