import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import correctionsRouter from "./routes/corrections";
import db from "./database";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/api", correctionsRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
