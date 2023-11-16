// Relations

import database from './user.js'

import Categorie from "./Categories.js";
import Emprunt from "./Emprunt.js";
import Exemplaire from "./Exemplaire.js";
import Livre from "./Livre.js"
import Reservation from "./Reservation.js";
import Role from "./Role.js";
import User from "./user.js";


// User ↔ Role : Relation plusieurs-à-plusieurs via la table d'association UserRole
User.belongsToMany(Role , { through: 'UserRole' });
Role.belongsTo(User, { through: 'UserRole' });

// User ↔ Reservation : Relation un-à-plusieurs
User.hasMany(Reservation);
Reservation.belongsTo(User);

// Reservation ↔ Exemplaire : Relation un-à-un
Reservation.belongsTo(Exemplaire);
Exemplaire.hasOne(Reservation);

// User ↔ Emprunt : Relation un-à-plusieurs
User.hasMany(Emprunt);
Emprunt.belongsTo(User);

// Emprunt ↔ Exemplaire : Relation un-à-un
Emprunt.belongsTo(Exemplaire);
Exemplaire.hasOne(Emprunt);

// Exemplaire ↔ Livre : Relation un-à-plusieurs
Livre.hasMany(Exemplaire);
Exemplaire.belongsTo(Livre);

// Livre ↔ Categorie : Relation un-à-plusieurs
Livre.belongsTo(Categorie);
Categorie.hasMany(Livre);


// Sync models with the database
database.sync();

// Export models and database
export  { User, Role,Reservation, Emprunt, Categorie ,Livre, Exemplaire};