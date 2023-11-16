// Model for Reservation (Reservation)
import { DataTypes } from "sequelize";
//import connexion
import database from "../connexion.js"

export const Reservation = database.define('Reservation', {
   
    date_reservation: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    statut: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  export default Reservation