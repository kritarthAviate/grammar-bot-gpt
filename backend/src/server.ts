import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import path from "path";
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

// Define the path to your HTML file
const staticFilesPath = path.join(__dirname, "../../frontend");
app.use(express.static(staticFilesPath));

// Serve the HTML file when a GET request is made to the root URL
app.get("/", (req: Request, res: Response) => {
  res.sendFile(staticFilesPath);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
