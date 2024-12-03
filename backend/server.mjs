import express from "express";
import cors from "cors";
import dontenv from "dotenv";
import products from "./products.js";

const app = express();
app.use(express.json());
app.use(cors());
dontenv.config();

const PORT = process.env.PORT || 5001;

app.listen(5001, () => console.log("Server is running on port 5001"));
