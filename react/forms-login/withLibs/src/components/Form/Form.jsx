import { FormField } from '../FormField/FormField.jsx';

export const Form = ({
	handleSubmit,
	onSubmit,
	register,
	emailError,
	passwordError,
	confirmPasswordError,
}) => {
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
				type='submit'
				className='form__button'
				disabled={emailError || passwordError || confirmPasswordError}
			>
				Отправить
			</button>
		</form>
	);
};
