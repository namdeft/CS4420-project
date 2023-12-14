import { db } from "../connect.js";

export const getSearchDish = (req, res) => {
  const dishName = req.params.searchDish

  const query = "SELECT dish.*, GROUP_CONCAT(DISTINCT ingredient.name) as ingredients, GROUP_CONCAT(DISTINCT origin.name) as origins, GROUP_CONCAT(DISTINCT category.name) as categories FROM dish LEFT JOIN dish_ingredient ON dish.ID = dish_ingredient.dish_id LEFT JOIN ingredient ON dish_ingredient.ingredient_id = ingredient.ID LEFT JOIN dish_origin ON dish.ID = dish_origin.dish_id LEFT JOIN origin ON dish_origin.origin_id = origin.ID LEFT JOIN dish_category ON dish.ID = dish_category.dish_id LEFT JOIN category ON dish_category.category_id = category.ID WHERE dish.name LIKE ? GROUP BY dish.ID"

  db.query(query, [dishName + '%'], (err, data) => {
    if (err) return err;
    return res.status(200).json({
      data,
    })
  })
}

export const getSearchCategory = (req, res) => {
  const categoryName = req.params.searchCategory

  const query = "SELECT dish.*, GROUP_CONCAT(DISTINCT ingredient.name) as ingredients, GROUP_CONCAT(DISTINCT origin.name) as origins, GROUP_CONCAT(DISTINCT category.name) as categories FROM dish LEFT JOIN dish_ingredient ON dish.ID = dish_ingredient.dish_id LEFT JOIN ingredient ON dish_ingredient.ingredient_id = ingredient.ID LEFT JOIN dish_origin ON dish.ID = dish_origin.dish_id LEFT JOIN origin ON dish_origin.origin_id = origin.ID LEFT JOIN dish_category ON dish.ID = dish_category.dish_id LEFT JOIN category ON dish_category.category_id = category.ID WHERE category.name LIKE ? GROUP BY dish.ID"

  db.query(query, [categoryName + '%'], (err, data) => {
    if (err) return err;
    return res.status(200).json({
      data,
    })
  })
}

export const getSearchOrigin = (req, res) => {
  const originName = req.params.searchOrigin

  const query = "SELECT dish.*, GROUP_CONCAT(DISTINCT ingredient.name) as ingredients, GROUP_CONCAT(DISTINCT origin.name) as origins, GROUP_CONCAT(DISTINCT category.name) as categories FROM dish LEFT JOIN dish_ingredient ON dish.ID = dish_ingredient.dish_id LEFT JOIN ingredient ON dish_ingredient.ingredient_id = ingredient.ID LEFT JOIN dish_origin ON dish.ID = dish_origin.dish_id LEFT JOIN origin ON dish_origin.origin_id = origin.ID LEFT JOIN dish_category ON dish.ID = dish_category.dish_id LEFT JOIN category ON dish_category.category_id = category.ID WHERE origin.name LIKE ? GROUP BY dish.ID"

  db.query(query, [originName + '%'], (err, data) => {
    if (err) return err;
    return res.status(200).json({
      data,
    })
  })
}

export const getSearchIngredient = (req, res) => {
  const ingredientName = req.params.searchIngredient

  const query = "SELECT dish.*, GROUP_CONCAT(DISTINCT ingredient.name) as ingredients, GROUP_CONCAT(DISTINCT origin.name) as origins, GROUP_CONCAT(DISTINCT category.name) as categories FROM dish LEFT JOIN dish_ingredient ON dish.ID = dish_ingredient.dish_id LEFT JOIN ingredient ON dish_ingredient.ingredient_id = ingredient.ID LEFT JOIN dish_origin ON dish.ID = dish_origin.dish_id LEFT JOIN origin ON dish_origin.origin_id = origin.ID LEFT JOIN dish_category ON dish.ID = dish_category.dish_id LEFT JOIN category ON dish_category.category_id = category.ID WHERE ingredient.name LIKE ? GROUP BY dish.ID"

  db.query(query, [ingredientName + '%'], (err, data) => {
    if (err) return err;
    return res.status(200).json({
      data,
    })
  })
}