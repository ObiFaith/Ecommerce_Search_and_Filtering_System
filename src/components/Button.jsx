const Button = ({ name, handleClick }) => (
	<button
		onClick={handleClick}
		name="buttons"
		value={name !== 'All Products' ? name : ''}
		className="btn"
	>
		{name}
	</button>
);

export default Button;
