// Importer Sequelize DataTypes
import { DataTypes } from 'sequelize';

// Importer la connexion à la base de données
import database from '../connexion.js'
//import { Livre } from './Relation.js';

// Modèle Livre
const Livre = database.define('Livre', {
  
  titre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  auteur: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date_publication: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
export default Livre;