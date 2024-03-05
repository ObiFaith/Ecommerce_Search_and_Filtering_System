import data from '../../db/data';
import RadioBox from '../RadioBox';

const Color = ({ handleColors }) => {
	const colors = [
		...new Set(
			data.map(
				item =>
					item.color[0].toUpperCase() +
					item.color.slice(1).toLowerCase()
			)
		),
	];
	return (
		<div>
			<h2 className="text-base xl:text-lg font-medium mb-3">Colors</h2>
			<RadioBox name="color" handleValue={handleColors} text="All" />
			{colors &&
				colors.map((color, index) => (
					<RadioBox
						name="color"
						handleValue={handleColors}
						text={color}
						key={index}
						color={color.toLowerCase()}
					/>
				))}
		</div>
	);
};

export default Color;
