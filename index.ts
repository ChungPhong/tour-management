import express, { Express } from "express";
import moment from "moment";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { adminRoutes } from "./routes/admin/index.route";
import { routesClient } from "./routes/client/index.route";
import { systemConfig } from "./config/system";

dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.use(express.static("public"));

// parse application/json
app.use(bodyParser.json());

app.set("views", "./views");
app.set("view engine", "pug");

//App Local Variables
app.locals.moment = moment;

//Client Routes
app.locals.prefixAdmin = systemConfig.prefixAdmin;
adminRoutes(app);
routesClient(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
