import express from "express";
import {
  getCorrectedSentence,
  getAllCorrections,
  getRandomCorrection,
} from "../controllers/corrections";

const router = express.Router();

router.post("/corrections", getCorrectedSentence);

router.get("/corrections", getAllCorrections);

router.get("/random", getRandomCorrection);

export default router;
