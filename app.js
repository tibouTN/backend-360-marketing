import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/authRoutes.js";
import usersRouter from "./routes/users.js";
import clientRouter from "./routes/client.js";
import connectDB from "./database/mongodb.js";
import errorMiddlwear from "./middlwears/error.middlwear.js";
import cookieParser from "cookie-parser";
import eventsRouter from "./routes/events.js";
import expenseRouter from "./routes/expense.js";
import incomesRouter from "./routes/incomes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/clients", clientRouter);
app.use("/api/v1/events",eventsRouter);
app.use("/api/v1/expenses",expenseRouter);
app.use("/api/v1/incomes",incomesRouter);



app.use(errorMiddlwear);



app.get("/", (req, res) => {
  res.send("Hello World");
}); 

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectDB();
});

export default app;