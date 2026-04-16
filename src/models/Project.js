import { DataTypes } from "sequelize";
import sequelize from "@/config/connection";

const Project = sequelize.define("Project", {
  titre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  technologies: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  github: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  demo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Project;