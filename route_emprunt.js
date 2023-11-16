import {Router} from 'express';
import {
  createEmprunt,
  listEmprunts,

  updateEmprunt,
  deleteEmprunt
} from '../controllers/emprunt.js';

const router = Router();

router.post('/emprunts', createEmprunt);
router.get('/emprunts', listEmprunts);
router.get('/emprunts/:id', updateEmprunt);
router.put('/emprunts/:id', updateEmprunt);
router.delete('/emprunts/:id', deleteEmprunt);


export default router;
