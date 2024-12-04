import axios from "axios";
import { ItemProducts } from "../Models/ItemProducts";

// Базовий URL для API
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5002";

//get all products from backend
export const LoadProducts = async (
  endpoint: string
): Promise<ItemProducts[]> => {
  const url = `${API_BASE_URL}${endpoint}`;
  const result = await axios.get(url);
  return result.data;
};

//get single product details
export const getProduct = async (id: number): Promise<ItemProducts | null> => {
  const url = `${API_BASE_URL}/products/${id}`;
  const result = await axios.get(url);

  return result.data;
};
