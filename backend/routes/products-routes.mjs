import express from "express";
import {
  listProducts,
  findProduct,
} from "../controllers/products-controller.mjs";

const router = express.Router();
router.route("/").get(listProducts); // Для отримання всіх продуктів
router.route("/:id").get(findProduct); // Для отримання продукту за ID

export default router;
