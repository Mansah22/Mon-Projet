
import {Router} from "express";

const router = Router();
import {
  creerRole,
  listerRoles,
  obtenirRole,
  modifierRole,
  supprimerRole
} from '../controllers/role.js';



router.post('/roles', creerRole);
router.get('/roles', listerRoles);
router.get('/roles/:id', obtenirRole);
router.put('/roles/:id', modifierRole);
router.delete('/roles/:id', supprimerRole);

export default router;
