import { Router } from 'express';
import {
  ajouterExemplaire,
  listerExemplaires,
  obtenirExemplaire,
  modifierExemplaire,
  supprimerExemplaire
} from '../controllers/Exemplaire.js';

const router = Router();

router.post('/exemplaires', ajouterExemplaire);
router.get('/exemplaires', listerExemplaires);
router.get('/exemplaires/:id', obtenirExemplaire);
router.put('/exemplaires/:id', modifierExemplaire);
router.delete('/exemplaires/:id', supprimerExemplaire);

export default router;
