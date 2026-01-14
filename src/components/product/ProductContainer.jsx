import { ProductPresenter } from "../..";
import { useEffect, useMemo, useState } from "react";
import { filterProducts, getProducts } from "../../../utils";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
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
      filters={filters}
      products={products}
      isLoading={isLoading}
      onFilterChange={updateFilter}
      filteredProducts={filteredProducts}
    />
  );
};

export default ProductContainer;
