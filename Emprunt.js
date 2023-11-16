// Modèle Emprunt
import { DataTypes } from "sequelize";
//import connexion
import database from "../connexion.js"

export const Emprunt = database.define('Emprunt', {

      date_emprunt: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      date_retour: {
        type: DataTypes.DATEONLY,
        allowNull: true 
      }
    });
    export default Emprunt