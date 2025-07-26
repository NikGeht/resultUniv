import { useState } from "react";

const initialState = {
	email: '',
	password: '',
	confirm_password: '',
	errors: {
		email: '',
		password: '',
		confirm_password: '',
	},
}

export const useStore = () => {
	const [state, setState] = useState(initialState);
	
	return {
		getState: () => state,
		updateState: (fieldName, newValue) => {
			setState(prev => {
				return {
					...prev,
					[fieldName]: newValue
				}
			})
		},
		setErrors: (fieldName, errorMessage) => {
			return setState(prev => {
				return {
					...prev,
					errors: {
						...prev?.errors,
						[fieldName]: errorMessage
					}
				}
			})
		}
	}
}