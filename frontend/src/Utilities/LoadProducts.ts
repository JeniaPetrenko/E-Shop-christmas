import axios from "axios";
import { ItemProducts } from "../Models/ItemProducts";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5003";

export const LoadProducts = async (
  endpoint: string
): Promise<ItemProducts[]> => {
  const url = `${API_BASE_URL}${endpoint}`;
  const result = await axios.get(url);

  if (result.data && Array.isArray(result.data.result)) {
    // Нормалізуємо дані
    return result.data.result.map((product: any) => ({
      ...product,
      img: product.image, // Переносимо 'image' в 'img' для сумісності
    }));
  } else {
    console.error("Unexpected API response format:", result.data);
    throw new Error("Invalid API response format");
  }
};

//get single product details
export const getProduct = async (id: number): Promise<ItemProducts | null> => {
  const url = `${API_BASE_URL}/products/${id}`;
  const result = await axios.get(url);

  if (result.data) {
    return {
      ...result.data,
      img: `/images/${result.data.image}`, // Нормалізований шлях
    };
  } else {
    console.error("Product not found in API response:", result.data);
    return null;
  }
};
