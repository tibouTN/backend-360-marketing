import { Router } from "express";
import { getUser,getUsers,updateUser,deleteUser } from "../controllers/userController.js";

const usersRouter = Router();

usersRouter.get("/", getUsers);

usersRouter.get("/:id", getUser);

usersRouter.post("/", (req, res) => {
  res.send({body:{title:'create user'}});
});

usersRouter.put("/:id",updateUser);

usersRouter.delete("/:id", deleteUser);


export default usersRouter;
