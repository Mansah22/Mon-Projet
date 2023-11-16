import { Router } from 'express';
const router = Router();
import {
  ajouterUser,
  listeUser,
  obteniUser,
  modifieUser,
  supprimeUser
} from '../controllers/User.js';

import { verifierLogin } from '../Authentification/verifierLogin.js';

router.get('/User',verifierLogin, listeUser);
router.post('/User', ajouterUser);

router.get('/User/:id', obteniUser);
router.put('/User/:id', modifieUser);
router.delete('/User/:id', supprimeUser);

export default router;
