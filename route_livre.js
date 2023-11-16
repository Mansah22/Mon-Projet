import { Router } from 'express';
import {
  creerLivre,
  listerLivres,
  obtenirLivre,
  modifierLivre,
  supprimerLivre
} from '../controllers/livre.js';

const router = Router();

router.post('/livres', creerLivre);
router.get('/livres', listerLivres);
router.get('/livres/:id', obtenirLivre);
router.put('/livres/:id', modifierLivre);
router.delete('/livres/:id', supprimerLivre);

export default router;
