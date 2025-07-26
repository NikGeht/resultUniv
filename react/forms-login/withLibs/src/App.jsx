import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fieldsSchema } from './utils/validation.js';
import { Form } from './components/Form/Form.jsx';

export const App = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirm_password: '',
		},
		mode: 'all',
		resolver: yupResolver(fieldsSchema),
	});

	function onSubmit(data) {
		console.log(data);
	}

	const values = watch();
	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const confirmPasswordError = errors.confirm_password?.message;

	const allFieldFilled =
		values.email && values.password && values.confirm_password;

	return (
		<div className='center-wrapper'>
			<div className='form-container'>
				<h1>Регистрация</h1>
				<Form
					handleSubmit={handleSubmit}
					onSubmit={onSubmit}
					register={register}
					emailError={emailError}
					passwordError={passwordError}
					confirmPasswordError={confirmPasswordError}
					allFieldFilled={allFieldFilled}
				/>
			</div>
		</div>
	);
};
