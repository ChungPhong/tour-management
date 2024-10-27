import express, { Express, Request, Response } from "express";
import sequelize from "./config/database";
import dotenv from "dotenv";

dotenv.config();
sequelize;

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/tours", (req: Request, res: Response) => {
  res.render("client/pages/tours/index");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
