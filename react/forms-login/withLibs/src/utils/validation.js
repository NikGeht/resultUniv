import * as yup from 'yup';

export const fieldsSchema = yup.object().shape({
	email: yup
		.string()
		.trim()
		.email('Неверный email. Необходимо ввести в формате example@example.com')
		.required('Введите email'),
	password: yup
		.string()
		.min(3, 'Пароль должен содержать минимум 3 символа')
		.max(20, 'Пароль должен содержать максимум 20 символов')
		.matches(
			/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
			'Пароль содержит недопустимые символы'
		)
		.required('Введите пароль'),
	confirm_password: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают')
		.required('Введите повторно пароль'),
});
