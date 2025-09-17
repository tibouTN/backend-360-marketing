import { Router } from "express";
import { createIncome, deleteIncome, getIncome, getIncomes, updateIncome } from "../controllers/incomesController.js";



const incomesRouter = Router();

incomesRouter.get("/", getIncomes);

incomesRouter.get("/:id",getIncome);

incomesRouter.post("/", updateIncome); 

incomesRouter.put("/:id", createIncome);

incomesRouter.delete("/:id", deleteIncome);


export default incomesRouter;