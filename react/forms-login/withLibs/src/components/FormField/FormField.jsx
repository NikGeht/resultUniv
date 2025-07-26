export const FormField = ({ register, error, name, type, placeholder }) => {
	return (
		<div className='form__field'>
			<input
				name={name}
				type={type}
				placeholder={placeholder}
				{...register(name)}
				className='form__item'
			/>
			{error && <p>{error}</p>}
		</div>
	);
};
