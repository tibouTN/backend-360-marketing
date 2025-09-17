import { Router } from "express";
import { getClient,getClients,updateClient,deleteClient, addClient } from "../controllers/clientsController.js";

const clientRouter = Router();

clientRouter.get("/", getClient);

clientRouter.get("/:id", getClients);

clientRouter.post("/", addClient);

clientRouter.put("/:id", updateClient);

clientRouter.delete("/:id", deleteClient);


export default clientRouter;


