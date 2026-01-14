import { Brands, Category, Color, Nav, Price, ProductList } from "../..";

const ProductPresenter = ({
  value,
  products,
  onFilterChange,
  filteredProducts,
}) => {
  return (
    <>
      {/* Sidebar */}
      <section className="pl-3 justify-center xl:pl-8 fixed items-start top-0 lg:w-40 xl:w-56 shadow-md h-full hidden lg:flex gap-4 flex-col select-none">
        <Category
          products={products}
          onSelect={(value) => onFilterChange("category", value)}
        />
        <Price
          products={products}
          onSelect={(value) => onFilterChange("price", value)}
        />
        <Color
          products={products}
          onSelect={(value) => onFilterChange("color", value)}
        />
      </section>
      {/* Header */}
      <Nav value={value} onChange={(value) => onFilterChange("name", value)} />
      {/* Brands */}
      <Brands
        products={products}
        onSelect={(value) => onFilterChange("brand", value)}
      />
      {/* Product List */}
      <ProductList products={filteredProducts} />
    </>
  );
};

export default ProductPresenter;
