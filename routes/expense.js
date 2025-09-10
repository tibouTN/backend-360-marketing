import { Router } from "express";

const expenseRouter = Router();

expenseRouter.get("/", (req, res) => {
    res.send({body:{title:'fetch all expenses'}});
});

expenseRouter.get("/:id", (req, res) => {
    res.send({body:{title:'fetch expense by id'}});
});

expenseRouter.post("/", (req, res) => {
    res.send({body:{title:'create expense'}});
}); 

expenseRouter.put("/:id", (req, res) => {
    res.send({body:{title:'update expense by id'}});
});

expenseRouter.delete("/:id", (req, res) => {
    res.send({body:{title:'delete expense by id'}});
});


export default expenseRouter;