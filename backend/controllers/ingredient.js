import { db } from "../connect.js";

export const getIngredients = (req, res) => {
  const query = "SELECT * FROM ingredient"

  db.query(query, (err, data) => {
    if (err) return err;
    return res.status(200).json({
      data,
    })
  })
}
