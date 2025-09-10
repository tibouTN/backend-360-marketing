import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.send({body:{title:'fetch all users'}});
});

usersRouter.get("/:id", (req, res) => {
  res.send({body:{title:'fetch user by id'}});
});

usersRouter.post("/", (req, res) => {
  res.send({body:{title:'create user'}});
});

usersRouter.put("/:id", (req, res) => {
  res.send({body:{title:'update user by id'}});
});

usersRouter.delete("/:id", (req, res) => {
  res.send({body:{title:'delete user by id'}});
});


export default usersRouter;
