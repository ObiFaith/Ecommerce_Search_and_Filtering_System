import { useEffect, useState } from "react";
import data from "./db/data";
import { getProducts } from "./db/getProducts";
import { Nav, Product, Products, Recommend, Sidebar } from ".";

const App = () => {
  const [products, setProducts] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filtered, setFiltered] = useState(null);

  /* Get Product from API */
  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setProducts(products);
    })();
  }, []);

  /* InputText */
  const handleInputText = (e) => setInputText(e.target.value);

  /* Radio Filter */
  const handleSidebar = (e) => setFiltered(e.target.value);

  /* Button Filter */
  const handleRecommmend = (e) => setFiltered(e.target.value);

  const filterData = (data, product, input) => {
    let filteredProducts = data;
    if (input)
      filteredProducts = data.filter(
        (product) =>
          product.title
            .toLocaleLowerCase()
            .indexOf(inputText.toLocaleLowerCase()) !== -1
      );

    if (product)
      filteredProducts = filteredProducts.filter(
        ({ category, color, newPrice, company, title }) =>
          [category, color, newPrice, company, title].includes(product)
      );

    return filteredProducts.map((product, index) => (
      <Product key={index} {...product} />
    ));
  };

  let product = filterData(data, filtered, inputText);

  return (
    <div className="font-sans">
      {/* <Sidebar products={products} handleSidebar={handleSidebar} /> */}
      <Nav text={inputText} handleText={handleInputText} />
      <Recommend products={products} handleRecommmend={handleRecommmend} />
      <Products product={product} />
    </div>
  );
};

export default App;
