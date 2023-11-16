import express from 'express';
import dotenv from 'dotenv'; 
import cors from 'cors'; 
import bodyParser from 'body-parser'
import helmet from 'helmet'
import compression from 'compression'


const app = express();

// Activation 
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(helmet())
app.use(compression())
app.use(bodyParser.json())

// Définir le port d'écoute pour votre serveur
const PORT = dotenv.config().parsed.PORT


// Routes
import route_user from './routes/route_user.js';
import route_exemplaire from './routes/route_exemplaire.js';
import route_livre from './routes/route_livre.js';
import route_reservation from  './routes/route_reservation.js';
import route_role from './routes/route_role.js';
import route_emprunt from './routes/route_emprunt.js';
import route_categorie from './routes/route_categorie.js'




//creation de table
database.sync({alter:true})

// Utilisez vos routes
app.use('/api', route_user);
app.use('/api', route_exemplaire);
app.use('/api', route_livre);
app.use('/api', route_reservation);
app.use('/api', route_role);
app.use('/api', route_emprunt);
app.use('/api', route_categorie);




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});


//import base de donnee

import database from './connexion.js'
import routeLogin from './routes/routeLogin.js'

app.use('/login',routeLogin)



