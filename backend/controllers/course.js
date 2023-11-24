import { db } from "../connect.js";

export const getCourses = (req, res) => {
  const query = "SELECT * FROM course"

  db.query(query, (err, data) => {
    if (err) return err;
    return res.status(200).json({
      data,
    })
  })
}