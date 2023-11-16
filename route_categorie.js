import { Router } from 'express';
import {
  creerCategorie,
  listerCategories,
  obtenirCategorie,
  modifierCategorie,
  supprimerCategorie
} from '../controllers/categorie.js';



const router = Router();

router.post('/categories', creerCategorie);
router.get('/categories', listerCategories);
router.get('/categories/:id', obtenirCategorie);
router.put('/categories/:id', modifierCategorie);
router.delete('/categories/:id', supprimerCategorie);

export default router;
