import { DataTypes } from "sequelize";
//import connexion
import database from "../connexion.js"
const Role = database.define('Role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  export default Role