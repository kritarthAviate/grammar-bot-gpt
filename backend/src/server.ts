import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./database";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  const query = "SELECT * FROM corrections ORDER BY RANDOM() LIMIT 1";
  db.get(query, (err: Error | null, row) => {
    if (err) {
      console.error(
        "Error fetching random correction from the database:",
        err.message
      );
      res.status(500).json({ error: "Error fetching random correction" });
    } else {
      res.json(row);
    }
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
