import mysql2 from "mysql2"

export const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Deft2306!",
  database: "eMenu"
})