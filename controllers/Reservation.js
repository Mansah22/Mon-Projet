// controllers/reservationController.js
import { validationResult } from 'express-validator';
import Reservation from '../models/Reservation.js'; 

export const creerReservation = async (req, res) => {
  // Valider les données de la requête
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  
  try {
    const nouvelleReservation = await Reservation.create({
      clientId: req.body.clientId,
      chambreId: req.body.chambreId,
      dateArrivee: req.body.dateArrivee,
      dateDepart: req.body.dateDepart,
      // Ajoutez d'autres champs si nécessaire
    });
    return res.status(201).json(nouvelleReservation);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};



export const listerReservations = async (req, res) => {

    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };

export const obtenirReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if (!reservation) {
          return res.status(404).json({ message: "Reservation not found" });
        }
        res.status(200).json(reservation);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };

export const modifierReservation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.status(200).json(updatedReservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const supprimerReservation = async (req, res) => {
    try {
        const deletedReservation = await Reservation.findByIdAndDelete(req.params.id);
        if (!deletedReservation) {
          return res.status(404).json({ message: "Reservation not found" });
        }
        res.status(200).json({ message: "Reservation deleted" });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };