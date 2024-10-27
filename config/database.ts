import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME, //Tên database
  process.env.DATABASE_USERNAME, //Tên database, //Username đăng nhập
  process.env.DATABASE_PASSWORD, //Tên database, // Mật khẩu
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log(">>>>Connection successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

export default sequelize;
