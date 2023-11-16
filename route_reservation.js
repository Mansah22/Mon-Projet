import { Router } from 'express';
import {
  creerReservation,
  listerReservations,
  obtenirReservation,
  modifierReservation,
  supprimerReservation
} from '../controllers/Reservation.js';

const router = Router();

router.post('/reservations', creerReservation);
router.get('/reservations', listerReservations);
router.get('/reservations/:id', obtenirReservation);
router.put('/reservations/:id', modifierReservation);
router.delete('/reservations/:id', supprimerReservation);

export default router;
