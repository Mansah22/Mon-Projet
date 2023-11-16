// Modèle Exemplaire
import { DataTypes } from "sequelize";
//import connexion
import database from "../connexion.js"

export const Exemplaire = database.define('Exemplaire', {
  
  etat: {
    type: DataTypes.STRING,
    allowNull: false
  },
  localisation: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Exemplaire