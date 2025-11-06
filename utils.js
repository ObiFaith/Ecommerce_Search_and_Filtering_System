import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
  const {
    data: { products },
  } = await axios.get(`${apiUrl}/api/v1/products`);
  return products;
};

export const filterData = (query) => {
  let { products } = query;
  const { name, brand, color, category } = query;

  if (name)
    products = products.filter(
      (product) => product.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );

  if (brand) products = products.filter((product) => product.company === brand);

  if (color) products = products.filter((product) => product.color === color);

  if (category)
    products = products.filter((product) => product.category === category);

  return products;
};
