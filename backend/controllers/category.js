import { db } from "../connect.js";

export const getCategories = (req, res) => {
  const query = "SELECT * FROM category"

  db.query(query, (err, data) => {
    if (err) return err;
    return res.status(200).json({
      data,
    })
  })
}
