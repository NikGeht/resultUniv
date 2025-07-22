import './button.scss';

export const Button = (props) => {
	return (
		<button className={`button ${props?.className}`} {...props}></button>
	)
}
