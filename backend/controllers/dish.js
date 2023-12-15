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

export const getDishes = (req, res) => {
  const query = `${baseQuery} GROUP BY dish.ID`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ data });
  });
};

export const getDish = (req, res) => {
  const dishId = req.params.id;
  const specificQuery = `${baseQuery} WHERE dish.ID = ? GROUP BY dish.ID`;

  db.query(specificQuery, [dishId], (err, data) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ data });
  });
};
