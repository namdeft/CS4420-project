import express from "express"
import * as dotenv from "dotenv"
import cookieParser from "cookie-parser";

import categoryRouter from "./routes/category.js"
import dishRouter from "./routes/dish.js"
import ingredientRouter from "./routes/ingredient.js"
import originRouter from "./routes/origin.js"

dotenv.config();
const app = express();

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1", categoryRouter);
app.use("/api/v1", dishRouter);
app.use("/api/v1", ingredientRouter);
app.use("/api/v1", originRouter);

app.listen(process.env.PORT || 8080, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }

  console.log(`Server is running on port: ${process.env.PORT}`);
}) 