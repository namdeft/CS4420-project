import { db } from "../connect.js";

export const getOrigins = (req, res) => {
  const query = "SELECT * FROM origin"

  db.query(query, (err, data) => {
    if (err) return err;
    return res.status(200).json({
      data,
    })
  })
}
