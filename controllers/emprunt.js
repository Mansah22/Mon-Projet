// controllers/emprunt.js
import { validationResult } from 'express-validator';
import { Emprunt } from '../models/Emprunt.js'; 

// Ajouter un emprunt
export const createEmprunt = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: "svp ce champ doit etre rempli"() });
  }

  try {
    const nouvelEmprunt = await Emprunt.create(req.body);
    res.status(201).json(nouvelEmprunt);
  } catch (error) {
    res.status(400).json({ error: "ca ete creer" });
  }
};

// Lister tous les emprunts avec pagination
export const listEmprunts = async (req, res) => {
  try {
    const { page = 1, pageSize = 10 } = req.query;
    const limit = parseInt(pageSize, 10);
    const offset = (parseInt(page, 10) - 1) * limit;

    const result = await Emprunt.findAndCountAll({
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

// Obtenir les détails d'un emprunt
export const obtenirEmprunt = async (req, res) => {
  try {
    const emprunt = await Emprunt.findByPk(req.params.id);
    if (!emprunt) {
      return res.status(404).json({ error: 'Emprunt non trouvé' });
    }
    res.status(200).json(emprunt);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Modifier un emprunt
export const  updateEmprunt = async (req, res) => {
  try {
    const emprunt = await Emprunt.findByPk(req.params.id);
    if (!emprunt) {
      return res.status(404).json({ error: 'Emprunt non trouvé' });
    }
    const empruntModifie = await emprunt.update(req.body);
    res.status(200).json(empruntModifie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un emprunt
export const deleteEmprunt = async (req, res) => {
  try {
    const emprunt = await Emprunt.findByPk(req.params.id);
    if (!emprunt) {
      return res.status(404).json({ error: 'Emprunt non trouvé' });
    }
    await emprunt.destroy();
    res.status(200).json({ message: 'Emprunt supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};