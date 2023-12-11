import { db } from "../connect.js";

export const getDishes = (req, res) => {
  const query = "SELECT * FROM dish"

  db.query(query, (err, data) => {
    if (err) return err;
    return res.status(200).json({
      data,
    })
  })
}
