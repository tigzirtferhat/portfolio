import { DataTypes } from "sequelize";
import sequelize from "@/config/connection";

const Testimonial = sequelize.define("Testimonial", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Testimonial;