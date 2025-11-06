import { getProducts } from "../../utils";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  /* Get Product from API */
  useEffect(() => {
    try {
      (async () => {
        const products = await getProducts();
        setProducts(products);
      })();
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
