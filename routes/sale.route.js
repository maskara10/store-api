import express from "express";
import SaleCreate from "../controllers/sale.controller.js";

const route = express.Router();

route.post("/", SaleCreate.createSale);

route.get("/", SaleCreate.getSales);

route.get("/:id", SaleCreate.getSale);

route.delete("/:id", SaleCreate.deleteSale);

route.put("/", SaleCreate.updateSale)

export default route;