import { ProductPresenter } from "../..";
import { useEffect, useMemo, useState } from "react";
import { filterProducts, getProducts } from "../../../utils";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    brand: "",
    color: "",
    price: "",
    category: "",
  });

  // load products
  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setProducts(products);
    })();
  }, []);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredProducts = useMemo(
    () => filterProducts(products, filters),
    [products, filters]
  );

  return (
    <ProductPresenter
      products={products}
      value={filters.name}
      onFilterChange={updateFilter}
      filteredProducts={filteredProducts}
    />
  );
};

export default ProductContainer;
