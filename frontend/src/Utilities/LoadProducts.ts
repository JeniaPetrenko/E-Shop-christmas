import axios from "axios";
import { ItemProducts } from "../Models/ItemProducts";

export const LoadProducts = async (
  endpoint: string
): Promise<ItemProducts[]> => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const key = import.meta.env.VITE_API_KEY;

  const url = `${baseUrl}${endpoint}${key}`;
  console.log(url);

  console.log(key, baseUrl);
  const result = await axios.get(url);

  return result.data;
};
