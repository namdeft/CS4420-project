import { db } from "../connect.js";

const baseQuery = `
  SELECT
    dish.*,
    GROUP_CONCAT(DISTINCT ingredient.name) as ingredients,
    GROUP_CONCAT(DISTINCT origin.name) as origins,
    GROUP_CONCAT(DISTINCT category.name) as categories
  FROM dish
    LEFT JOIN dish_ingredient ON dish.ID = dish_ingredient.dish_id
    LEFT JOIN ingredient ON dish_ingredient.ingredient_id = ingredient.ID
    LEFT JOIN dish_origin ON dish.ID = dish_origin.dish_id
    LEFT JOIN origin ON dish_origin.origin_id = origin.ID
    LEFT JOIN dish_category ON dish.ID = dish_category.dish_id
    LEFT JOIN category ON dish_category.category_id = category.ID
`;

const getSearchResults = (req, res, searchParam, searchType) => {
  const query = `${baseQuery} WHERE ${searchType}.name LIKE ? GROUP BY dish.ID`;

  db.query(query, [searchParam + '%'], (err, data) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ data });
  });
};

export const getSearchDish = (req, res) => {
  const dishName = req.params.searchDish;
  getSearchResults(req, res, dishName, 'dish');
};

export const getSearchCategory = (req, res) => {
  const categoryName = req.params.searchCategory;
  getSearchResults(req, res, categoryName, 'category');
};

export const getSearchOrigin = (req, res) => {
  const originName = req.params.searchOrigin;
  getSearchResults(req, res, originName, 'origin');
};

export const getSearchIngredient = (req, res) => {
  const ingredientName = req.params.searchIngredient;
  getSearchResults(req, res, ingredientName, 'ingredient');
};
