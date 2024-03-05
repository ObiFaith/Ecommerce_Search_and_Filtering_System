const Icon = ({ iconURL }) => (
	<img
		src={iconURL}
		alt="Icon"
		width={iconURL.includes('bag') ? '16' : '20'}
	/>
);

export default Icon;
