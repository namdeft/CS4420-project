import express from "express"
import { getDishes } from "../controllers/dish.js";

const router = express.Router();

router.get("/dishes", getDishes)

export default router;