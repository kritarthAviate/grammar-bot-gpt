import { Request, Response } from "express";
import { getCorrectedSentenceFromOpenAI } from "../services/openAIService";
import db from "../database";

interface Correction {
  id: number;
  original: string;
  corrected: string;
  timestamp: string;
}

const getCorrectedSentence = async (req: Request, res: Response) => {
  const { sentence } = req.body;
  try {
    // Call the GPT-3 API to get the corrected sentence
    const correctedSentence = await getCorrectedSentenceFromOpenAI(sentence);
    console.log("Corrected sentence:", correctedSentence);

    // Save the original and corrected sentences in the database
    db.run(
      "INSERT INTO corrections (original, corrected) VALUES (?, ?)",
      [sentence, correctedSentence],
      (err: Error | null) => {
        if (err) {
          console.error(
            "Error saving correction to the database:",
            err.message
          );
        } else {
          console.log("Correction saved to the database.");
        }
      }
    );

    res.json({ correctedSentence });
  } catch (error: any) {
    console.error("Error correcting the sentence:", error.message);
    res.status(500).json({ error: "Error correcting the sentence" });
  }
};

const getAllCorrections = async (_: Request, res: Response) => {
  db.all(
    "SELECT * FROM corrections",
    (err: Error | null, rows: Correction[]) => {
      if (err) {
        console.error(
          "Error fetching corrections from the database:",
          err.message
        );
        res.status(500).json({ error: "Error fetching corrections" });
      } else {
        res.json(rows);
      }
    }
  );
};

const getRandomCorrection = async (_: Request, res: Response) => {
  console.log("Fetching a random correction from the database...");
  db.get(
    "SELECT * FROM corrections ORDER BY RANDOM() LIMIT 1",
    (err: Error | null, row: Correction) => {
      if (err) {
        console.error(
          "Error fetching random correction from the database:",
          err.message
        );
        res.status(500).json({ error: "Error fetching random correction" });
      } else {
        res.json(row);
      }
    }
  );
};

export { getCorrectedSentence, getAllCorrections, getRandomCorrection };
