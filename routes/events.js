import { Router } from "express";

import { getEvents,addEvent,deleteEvent, getEvent ,updateEvent} from "../controllers/eventsController.js";


const eventsRouter = Router();

eventsRouter.get("/", getEvents);

eventsRouter.get("/:id",getEvent);

eventsRouter.post("/",addEvent);

eventsRouter.put("/:id",updateEvent);

eventsRouter.delete("/:id",deleteEvent);


export default eventsRouter;


