import './FormField.scss';

export const FormField = ({
	name,
	type,
	placeholder,
	value,
	error,
	onChange,
	onBlur,
}) => {
	return (
		<div className='form__field'>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				className='form__item'
			/>
			{error && <span className='form__error'>{error}</span>}
		</div>
	);
};
