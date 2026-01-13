import { ProductPresenter } from "../..";
import { useEffect, useState } from "react";
import { filterProducts, getProducts } from "../../../utils";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState({
    name: "",
    brand: "",
    color: "",
    category: "",
  });

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setProducts(products);
    })();
  }, []);

  useEffect(() => {
    setFiltered(prev => ({ ...prev, products }));
  }, [products]);

  /* Input */
  const handleInput = e => {
    setFiltered(prev => ({ ...prev, name: e.target.value }));
  };

  /* Button Filter */
  const handleRecommmend = e => {
    console.log(e.target.value);
    setFiltered(prev => ({ ...prev, brand: e.target.value }));
  };

  /* Color Filter */
  const handleColor = e => {
    setFiltered(prev => ({ ...prev, color: e.target.value }));
  };

  /* Category Filter */
  const handleCategory = e => {
    setFiltered(prev => ({ ...prev, category: e.target.value }));
  };

  /* Price Filter */
  const handlePrice = e => {
    setFiltered(prev => ({ ...prev, price: e.target.value }));
  };

  let filteredProducts = filterProducts(products, filtered);

  return (
    <ProductPresenter
      input={filtered.name}
      products={products}
      handleInput={handleInput}
      handleColor={handleColor}
      handlePrice={handlePrice}
      handleCategory={handleCategory}
      filteredProducts={filteredProducts}
      handleRecommmend={handleRecommmend}
    />
  );
};

export default ProductContainer;
