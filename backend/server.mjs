import express from "express";
import cors from "cors";
//import dontenv from "dotenv";

const app = express();

app.listen(5001, () => console.log("Server is running on port 5001"));
