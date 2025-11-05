import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
  const {
    data: { products },
  } = await axios.get(`${apiUrl}/api/v1/products`);
  return products;
};
