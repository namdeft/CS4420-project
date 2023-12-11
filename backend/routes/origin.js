import express from "express"
import { getOrigins } from "../controllers/origin.js";

const router = express.Router();

router.get("/origins", getOrigins)

export default router;