import { Category, Color, Nav, Price, ProductList, Recommend } from "../..";

const ProductPresenter = ({
  input,
  products,
  handleInput,
  handleColor,
  handlePrice,
  handleCategory,
  filteredProducts,
  handleRecommmend
}) => {
  return (
    <>
      {/* Sidebar */}
      <section className="pl-3 justify-center xl:pl-8 fixed items-start top-0 lg:w-40 xl:w-56 shadow-md h-full hidden lg:flex gap-4 flex-col select-none">
        <Category products={products} handleCategory={handleCategory} />
        <Price products={products} handlePrice={handlePrice} />
        <Color products={products} handleColor={handleColor} />
      </section>
      {/* Header */}
      <Nav input={input} handleInput={handleInput} />
      {/* Brands */}
      <Recommend products={products} handleRecommmend={handleRecommmend} />
      {/* Product List */}
      <ProductList products={filteredProducts} />
    </>
  );
};

export default ProductPresenter;
