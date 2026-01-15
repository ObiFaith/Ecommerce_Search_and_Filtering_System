import { lazy } from "react";
import PropTypes from "prop-types";
import { Brands, Nav, ProductList } from "../..";


const Sidebar = lazy(() => import("../sidebar"));

const ProductPresenter = ({
  filters,
  products,
  isLoading,
  onFilterChange,
  filteredProducts,
}) => {
  return (
    <>
      {/* Sidebar */}
      <Sidebar products={products} onFilterChange={onFilterChange} />
      {/* Header */}
      <Nav
        value={filters.name}
        onChange={(value) => onFilterChange("name", value)}
      />
      {/* Brands */}
      <Brands
        products={products}
        onSelect={(value) => onFilterChange("brand", value)}
      />
      {/* Product List */}
      <ProductList
        filters={filters}
        isLoading={isLoading}
        products={filteredProducts}
      />
    </>
  );
};

ProductPresenter.propTypes = {
  filters: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  filteredProducts: PropTypes.array.isRequired,
};

export default ProductPresenter;
