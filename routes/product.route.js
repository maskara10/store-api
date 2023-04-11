import express from "express";
import ProductCreate from "../controllers/product.controller.js";

const route = express.Router();

route.post("/", ProductCreate.createProduct);

route.get("/", ProductCreate.getProducts);

route.get("/:id", ProductCreate.getProduct);

route.delete("/:id", ProductCreate.deleteProduct);

route.put("/", ProductCreate.updateProduct);

route.post("/info", ProductCreate.createProductInfo);

route.put("/info", ProductCreate.updateProductInfo);

route.post("/review", ProductCreate.createReview);

route.delete("/:id/review/:index", ProductCreate.deleteReview);

export default route;
