import { Router } from "express";
import app from "../app";


const eventsRouter = Router();

eventsRouter.get("/", (req, res) => {
    res.send({body:{title:'fetch all events'}});
});

eventsRouter.get("/:id", (req, res) => {
    res.send({body:{title:'fetch event by id'}});
});

eventsRouter.post("/", (req, res) => {
    res.send({body:{title:'create event'}});
});

eventsRouter.put("/:id", (req, res) => {
    res.send({body:{title:'update event by id'}});
});

eventsRouter.delete("/:id", (req, res) => {
    res.send({body:{title:'delete event by id'}});
});


export default eventsRouter;


