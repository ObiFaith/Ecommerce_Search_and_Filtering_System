import Button from '../components/Button';
import data from '../db/data';

const Recommend = ({ handleRecommmend }) => {
	const companys = [
		...new Set(
			data.map(
				item =>
					item.company[0].toUpperCase() +
					item.company.slice(1).toLowerCase()
			)
		),
	];
	return (
		<div className="max-container">
			<h2 className="font-sans text-2xl font-bold mb-3">Recommend</h2>
			<div className="flex gap-3">
				<Button
					handleClick={handleRecommmend}
					name="All Products"
				/>
				{companys &&
					companys.map(company => (
						<Button
							handleClick={handleRecommmend}
							key={company}
							name={company}
						/>
					))}
			</div>
		</div>
	);
};

export default Recommend;
