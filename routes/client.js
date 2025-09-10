import { Router } from "express";

const clientRouter = Router();

clientRouter.get("/", (req, res) => {
    res.send({body:{title:'fetch all clients'}});
});

clientRouter.get("/:id", (req, res) => {
    res.send({body:{title:'fetch client by id'}});
});

clientRouter.post("/", (req, res) => {
    res.send({body:{title:'create client'}});
});

clientRouter.put("/:id", (req, res) => {
    res.send({body:{title:'update client by id'}});
});

clientRouter.delete("/:id", (req, res) => {
    res.send({body:{title:'delete client by id'}});
});


export default clientRouter;


