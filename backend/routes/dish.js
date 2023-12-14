import express from "express"
import { getDishes, getDish } from "../controllers/dish.js";

const router = express.Router();

router.get("/dishes", getDishes)
router.get("/dishes/:id", getDish)

export default router;