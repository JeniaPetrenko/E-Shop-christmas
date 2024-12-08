import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productsRouter from "./routes/products-routes.mjs";

dotenv.config();

const PORT = process.env.PORT || 5002;
const app = express();

app.use(express.json());
app.use(cors());

// Підключення маршрутів
app.use("/api/products", productsRouter);

app.get("/", (req, res) => {
  res.status(200).json("Backend server is running");
});

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
