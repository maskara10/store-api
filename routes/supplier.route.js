import express from "express";
import SupplierCreate from "../controllers/supplier.controller.js";

const route = express.Router();

route.post("/", SupplierCreate.createSupplier);

route.get("/", SupplierCreate.getSuppliers);

route.get("/:id", SupplierCreate.getSupplier);

route.delete("/:id", SupplierCreate.deleteSupplier);

route.put("/", SupplierCreate.updateSupplier)

export default route;