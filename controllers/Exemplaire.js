// controllers/exemplaire.js
import { validationResult } from 'express-validator';
import { Exemplaire } from '../models/Exemplaire.js'; 

// Ajouter un exemplaire
export const ajouterExemplaire = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const nouvelExemplaire = await Exemplaire.create(req.body);
    res.status(201).json(nouvelExemplaire);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Lister tous les exemplaires avec pagination
export const listerExemplaires = async (req, res) => {
  try {
    const { page = 1, pageSize = 10 } = req.query;
    const limit = parseInt(pageSize, 10);
    const offset = (parseInt(page, 10) - 1) * limit;

    const result = await Exemplaire.findAndCountAll({
      limit,
      offset,
      
    });

    res.status(200).json({
      totalPages: Math.ceil(result.count / limit),
      currentPage: parseInt(page, 10),
      pageSize: limit,
      totalCount: result.count,
      data: result.rows
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir les détails d'un exemplaire
export const obtenirExemplaire = async (req, res) => {
  try {
    const exemplaire = await Exemplaire.findByPk(req.params.id);
    if (!exemplaire) {
      return res.status(404).json({ error: 'Exemplaire non trouvé' });
    }
    res.status(200).json(exemplaire);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Modifier un exemplaire
export const modifierExemplaire = async (req, res) => {
  try {
    const exemplaire = await Exemplaire.findByPk(req.params.id);
    if (!exemplaire) {
      return res.status(404).json({ error: 'Exemplaire non trouvé' });
    }
    const exemplaireModifie = await exemplaire.update(req.body);
    res.status(200).json(exemplaireModifie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un exemplaire
export const supprimerExemplaire = async (req, res) => {
  try {
    const exemplaire = await Exemplaire.findByPk(req.params.id);
    if (!exemplaire) {
      return res.status(404).json({ error: 'Exemplaire non trouvé' });
    }
    await exemplaire.destroy();
    res.status(200).json({ message: 'Exemplaire supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
