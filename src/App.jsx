import { useEffect, useState } from "react";
import { filterProducts, getProducts } from "../utils";
import { Category, Color, Nav, Price, ProductList, Recommend } from ".";

const App = () => {
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

  /* InputText */
  const handleInputText = e => {
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
    <div className="font-sans">
      {/* Sidebar */}
      <section className="pl-3 justify-center xl:pl-8 fixed items-start top-0 lg:w-40 xl:w-56 shadow-md h-full hidden lg:flex gap-4 flex-col select-none">
        <Category products={products} handleCategory={handleCategory} />
        <Price products={products} handlePrice={handlePrice} />
        <Color products={products} handleColor={handleColor} />
      </section>
      {/* Header */}
      <Nav text={filtered.name} handleText={handleInputText} />
      {/* Brands */}
      <Recommend products={products} handleRecommmend={handleRecommmend} />
      {/* Product List */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
