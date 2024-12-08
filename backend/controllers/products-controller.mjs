import { fetchData } from "../utilities/httpClient.mjs";
import ItemsModel from "../models/ItemsModel.mjs";

// Отримати список усіх продуктів
export const listProducts = async (req, res) => {
  try {
    console.log("Fetching products from JSON server...");
    const response = await fetchData("http://localhost:5001/products", "GET");

    // Розпаковуємо вкладений ключ `data`
    const products = response[0]?.data || [];
    console.log("Products fetched:", products);

    // Мапимо продукти на модель
    const items = products.map(
      (item) =>
        new ItemsModel(
          item.id,
          item.name,
          item.price,
          item.description,
          item.image, // Зверніть увагу на правильне поле `image`
          item.category,
          item.quantity
        )
    );

    res.status(200).json({ success: true, result: items });
  } catch (error) {
    console.error("Error in listProducts:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch products" });
  }
};

// Отримати конкретний продукт за ID
export const findProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await fetchData("http://localhost:5001/products", "GET");

    // Розпаковуємо вкладений ключ `data`
    const products = response[0]?.data || [];
    const product = products.find((p) => p.id === parseInt(id, 10));

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: `Product with${id} ID not found` });
    }

    // Мапимо знайдений продукт на модель
    const item = new ItemsModel(
      product.id,
      product.name,
      product.price,
      product.description,
      product.image,
      product.category,
      product.quantity
    );

    res.status(200).json({ success: true, result: item });
  } catch (error) {
    console.error("Error in findProduct:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch product" });
  }
};
