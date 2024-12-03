import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import products from "./products.js"; // Імпортуємо products.js

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json("Server is running");
});

// Запит на отримання продукту за ID
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10); // Переконуємось, що id є числом
  const allProducts = products.data.flatMap((page) => page.products);
  const product = allProducts.find((p) => p.id === productId);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Якщо ви хочете отримати всі продукти
app.get("/products", (req, res) => {
  const allProducts = products.data.flatMap((page) => page.products);
  res.status(200).json(allProducts);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
