import { Router } from "express";
import { signup } from "../controllers/auth.controller.js";
import { signin } from "../controllers/auth.controller.js";
import { signout } from "../controllers/auth.controller.js";

const authRouter = Router();


authRouter.post("/signup", signup);


 

export default authRouter;
