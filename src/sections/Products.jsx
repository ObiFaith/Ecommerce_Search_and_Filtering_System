const Products = ({ product }) => {
	return (
		<section className="flex flex-wrap pt-12 gap-5 max-container md:justify-around justify-center">
			{product}
		</section>
	);
};

export default Products;
