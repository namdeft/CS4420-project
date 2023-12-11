import express from "express"
import { getIngredients } from "../controllers/ingredient.js";

const router = express.Router();

router.get("/ingredients", getIngredients)

export default router;