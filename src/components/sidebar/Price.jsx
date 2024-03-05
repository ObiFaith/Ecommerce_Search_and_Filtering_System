import data from '../../db/data';

const Price = ({ handlePrice }) => {
	const prices = [
		...new Set(
			data.map(
				item => item.newPrice[0].toUpperCase() + item.newPrice.slice(1)
			)
		),
	].sort(
		(a, b) => parseInt(a.replace('$', '')) - parseInt(b.replace('$', ''))
	);
	return (
		<div>
			<h2 className="text-base xl:text-lg font-medium mb-3">Price</h2>
			{prices &&
				prices.map((newPrice, index) => (
					<div key={index} className="relative block pl-9 mb-3 *:cursor-pointer">
						<input
							onChange={handlePrice}
							type="radio"
							name="price"
							value={(() => {const price = newPrice; return price})()}
							className="absolute opacity-0 peer"
						/>
						<span className="custom-radio"></span>
						{[index + 1] == prices.length
								? `Over ${newPrice}`
								: `${newPrice} - ${prices[index + 1]}`}
					</div>
				))}
		</div>
	);
};

export default Price;
