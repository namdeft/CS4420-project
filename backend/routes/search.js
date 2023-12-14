import express from "express"
import { getSearchCategory, getSearchDish, getSearchIngredient, getSearchOrigin } from "../controllers/search.js";

const router = express.Router();

router.get("/search/dishes/:searchDish", getSearchDish)
router.get("/search/categories/:searchCategory", getSearchCategory)
router.get("/search/origins/:searchOrigin", getSearchOrigin)
router.get("/search/ingredients/:searchIngredient", getSearchIngredient)

export default router;