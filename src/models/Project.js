import { DataTypes } from "sequelize";
import sequelize from "@/config/connection";

const Project = sequelize.define(
  "Project",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    technologies: {
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
  },
  {
    tableName: "Projects",
    timestamps: true,
  }
);

export default Project;