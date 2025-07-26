export const VALIDATION_RULES = {
	PASSWORD: { MIN_LENGTH: 3, MAX_LENGTH: 20 },
	DEBOUNCE_DELAY: 500,
};

export const validatePassword = (password) => {
	if (password.length === 0) {
		return 'Поле с паролем не должен быть пустым';
	}
	return password.length >= VALIDATION_RULES.PASSWORD.MIN_LENGTH &&
		password.length <= VALIDATION_RULES.PASSWORD.MAX_LENGTH
		? null
		: `Пароль должен содержать от ${VALIDATION_RULES.PASSWORD.MIN_LENGTH} до ${VALIDATION_RULES.PASSWORD.MAX_LENGTH} символов`;
};

export const validateEmail = (email) => {
	return /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)
		? null
		: 'Неверный email';
};

export const validateConfirmPassword = (password, confirmPassword) => {
	if (confirmPassword.length === 0) {
		return 'Поле с повторным паролем не должен быть пустым';
	}
	return password === confirmPassword ? null : 'Пароли не совпадают';
};

export const isError = (errors) => {
	return Object.values(errors || {}).some((error) => error);
};

export const isDisableSubmit = (errors, state) => {
	return (
		!isError(errors) &&
		state.password.length > 0 &&
		state.confirm_password.length > 0 &&
		state.email.length > 0
	);
};
