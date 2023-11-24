import express from "express"
import { db } from "./connect.js";
import * as dotenv from "dotenv"
import cookieParser from "cookie-parser";

import courseRouter from "./routes/course.js"

dotenv.config();
const app = express();

app.use(express.json())
app.use(cookieParser())

console.log(courseRouter);
app.use("/api/v1", courseRouter);

app.listen(process.env.PORT || 8080, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }

  console.log(`Server is running on port: ${process.env.PORT}`);
})