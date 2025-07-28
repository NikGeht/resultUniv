export const TodosHead = ({ search, searchHandler, headerText }) => {
	return (
		<>
			<h1 className='todos__header'>{headerText}</h1>
			<input
				type='text'
				placeholder='Поиск...'
				className='todos__search'
				value={search}
				onChange={searchHandler}
			></input>
		</>
	);
};
