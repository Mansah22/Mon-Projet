import express from 'express';
import { body, validationResult } from 'express-validator';

import dotenv from 'dotenv'; // Pour les variables d'environnement
import cors from 'cors'; // Pour activer le CORS si nécessaire
import bodyParser from 'body-parser'
import helmet from 'helmet'
import compression from 'compression'





// Routes

import adherentRoutes from './routes/adherentRoutes.js';
import exemplaireRoutes from './routes/exemplaireRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
import reservationRoutes from './routes/reservationRoutes.js';
import categorieRoutes from './routes/categorieRoutes.js';

import userRoutes from './routes/userRoutes.js';
import empruntRoutes from './routes/empruntRoutes.js';
import livreRoutes from './routes/livreRoutes.js';

//import adherentRoutes from './routes/route_adherent.js'; // Hypothèse pour les routes de prêts/emprunts
//import copyRoutes from './routes/copyRoutes.js'; // Hypothèse pour les routes d'exemplaires/copies

// Middlewares
import { errorHandler, notFound } from './middlewares/errorMiddleware.js'; // Hypothétiques middlewares d'erreur
import { Livre, database } from './models/Relation.js';

// Initialisation des variables d'environnement
dotenv.config();

const app = express();

// Activation de CORS
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(helmet())
app.use(compression())
app.use(Relatio())


//creation de table
database.sync()

// Middleware pour lire le JSON dans les requêtes entrantes
app.use(express.json());

// Utilisation des routes

app.use('/api', roleRoutes);
app.use('/api', reservationRoutes);
app.use('/api', adherentRoutes);
app.use('/api', exemplaireRoutes);
app.use('/api/categories', categoryRoutes);
;

app.use('/api', categorieRoutes);
app.use('/api', exemplaireRoutes);
app.use('/api', userRoutes);
app.use('/api', empruntRoutes);
app.use('/api', livreRoutes);



// Gestion des erreurs 404 pour les routes non trouvées
app.use(notFound);

// Gestionnaire d'erreurs centralisé
app.use(errorHandler);




//validation 
import { validateLivre } from './controllers/livreController';

app.post('/livres', validateLivre, ajouterLivre);



// Définir le port d'écoute pour votre serveur
const PORT = dotenv.config().parsed.PORT


//token
import authenticateToken from './middleware/authenticateToken.js';
app.use('/api/protected', authenticateToken, protectedRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
