import "server-only";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false,
});

await sequelize.sync({ force: true });

export default sequelize;