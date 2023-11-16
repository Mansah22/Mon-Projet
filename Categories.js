// Modèle Catégorie

import { DataTypes } from "sequelize";
//import connexion
import database from "../connexion.js"
 
//table
 const Categorie = database.define('Categorie', {

  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});
export default Categorie