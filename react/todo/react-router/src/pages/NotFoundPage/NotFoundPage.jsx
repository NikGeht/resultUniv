import './notFoundPage.scss';
import { useNavigate } from 'react-router-dom';
export const NotFoundPage = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};

	return (
		<div className='not-found'>
			<h1 className='not-found__title'>404</h1>
			<p className='not-found__text'>Страница не найдена</p>
			<button className='not-found__button' onClick={handleClick}>
				Назад
			</button>
		</div>
	);
};
