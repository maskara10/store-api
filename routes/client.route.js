import express from "express";
import ClientCreate from "../controllers/client.controller.js";

const route = express.Router();

route.post("/", ClientCreate.createClient);

route.get("/", ClientCreate.getClients);

route.get("/:id", ClientCreate.getClient);

route.delete("/:id", ClientCreate.deleteClient);

route.put("/", ClientCreate.updateClient)

export default route;
