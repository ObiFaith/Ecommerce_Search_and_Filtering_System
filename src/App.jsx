import { useState } from 'react';
import data from './db/data';
import { Nav, Product, Products, Recommend, Sidebar } from '.';

const App = () => {
	const [inputText, setInputText] = useState('');
	const [filtered, setFiltered] = useState(null);

	/* InputText */
	const handleInputText = e => setInputText(e.target.value);

	/* Radio Filter */
	const handleSidebar = e => setFiltered(e.target.value);

	/* Button Filter */
	const handleRecommmend = e => setFiltered(e.target.value);

	const filterData = (data, product, input) => {
		let filteredProducts = data;
		if (input)
			filteredProducts = data.filter(
				product =>
					product.title
						.toLocaleLowerCase()
						.indexOf(inputText.toLocaleLowerCase()) !== -1
			);

		if (product)
			filteredProducts = filteredProducts.filter(
				({ category, color, newPrice, company, title }) =>
					[category, color, newPrice, company, title].includes(
						product
					)
			);

		return filteredProducts.map((product, index) => (
			<Product key={index} {...product} />
		));
	};

	let product = filterData(data, filtered, inputText);

	return (
		<div className="font-sans">
			<Sidebar handleSidebar={handleSidebar} />
			<Nav text={inputText} handleText={handleInputText} />
			<Recommend handleRecommmend={handleRecommmend} />
			<Products product={product} />
		</div>
	);
};

export default App;
