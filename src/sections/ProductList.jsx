import Product from "../components/Product";

const ProductList = ({ products }) => {
  return products.length > 0 ? (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 pt-12 gap-5 max-container">
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </section>
  ) : (
    <div className="max-container pt-20 text-xl lg:text-2xl font-medium text-center">
      No such product!
    </div>
  );
};

export default ProductList;
