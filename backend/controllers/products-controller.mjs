import { fetchData } from "../utilities/fetchData.mjs";
import ItemsModel from "../models/ItemsModel.mjs";

// Функція для отримання продуктів
export const listProducts = async (req, res) => {
  try {
    const products = await fetchData("products"); // Звертаємось до JSON Server

    const items = products.map(
      (item) =>
        new ItemsModel(
          item.id,
          item.name,
          item.price,
          item.description,
          item.img,
          item.category,
          item.quantity
        )
    );

    res.status(200).json({ success: true, result: items });
  } catch (error) {
    console.error("Error in listProducts:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch products" });
  }
};

// Функція для пошуку продукту за ID
export const findProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const products = await fetchData("products"); // Отримуємо всі продукти

    // Знаходимо продукт по ID
    const product = products.find((p) => p.id === parseInt(id, 10));

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    const item = new ItemsModel(
      product.id,
      product.name,
      product.price,
      product.description,
      product.img,
      product.category,
      product.quantity
    );

    res.status(200).json({ success: true, result: item });
  } catch (error) {
    console.error("Error in findProduct:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch product" });
  }
};
