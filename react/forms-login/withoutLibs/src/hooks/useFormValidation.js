import { useRef } from 'react';
import { useStore } from './useStore.js';
import {
	validateConfirmPassword,
	validateEmail,
	validatePassword,
	VALIDATION_RULES,
} from '../utils/validaiton.js';

export const useFormValidation = () => {
	const { getState, setErrors, updateState } = useStore();
	const timeoutRef = useRef(null);

	const validateField = (name, value) => {
		const { password, confirm_password } = getState();
		let error = null;

		switch (name) {
			case 'email':
				error = validateEmail(value);
				break;
			case 'password':
				error = validatePassword(value);
				if (confirm_password) {
					const confirmError = validateConfirmPassword(value, confirm_password);
					setErrors('confirm_password', confirmError);
				}
				break;
			case 'confirm_password':
				error = validateConfirmPassword(password, value);
				if (password) {
					const passwordError = validatePassword(password);
					setErrors('password', passwordError);
				}
				break;
		}

		setErrors(name, error);
	};

	const handleChange = ({ target }) => {
		const { name, value } = target;
		updateState(name, value);

		if (name === 'email') {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			timeoutRef.current = setTimeout(() => {
				validateField(name, value);
			}, VALIDATION_RULES.DEBOUNCE_DELAY);
		} else {
			validateField(name, value);
		}
	};

	const handleBlur = ({ target }) => {
		const { name, value } = target;
		validateField(name, value);
	};

	return {
		handleChange,
		handleBlur,
		validateField,
		getState,
	};
};
