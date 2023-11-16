// controllers/livre.js
import { validationResult } from 'express-validator';
import { Livre } from '../models/Relation.js'; 

// Ajouter un livre
export const creerLivre = async (req, res) => {
  // Valider les données de la requête
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Si les données ne sont pas valides, renvoyer une réponse 400 avec les erreurs
    return res.status(400).json({ errors: errors.array() });
  }


  try {
    const nouveauLivre = await Livre.create(req.body);
    res.status(201).json(nouveauLivre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Lister tous les livres avec pagination
export const listerLivres = async (req, res) => {
  try {
    const { page = 1, pageSize = 10 } = req.query;
    const limit = parseInt(pageSize, 10);
    const offset = (parseInt(page, 10) - 1) * limit;

    const result = await Livre.findAndCountAll({
      limit,
      offset,
      // 
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

// Obtenir les détails d'un livre
export const obtenirLivre = async (req, res) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    if (!livre) {
      return res.status(404).json({ error: 'Livre non trouvé' });
    }
    res.status(200).json(livre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Modifier un livre
export const modifierLivre = async (req, res) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    if (!livre) {
      return res.status(404).json({ error: 'Livre non trouvé' });
    }
    const livreModifie = await livre.update(req.body);
    res.status(200).json(livreModifie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un livre
export const supprimerLivre = async (req, res) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    if (!livre) {
      return res.status(404).json({ error: 'Livre non trouvé' });
    }
    await livre.destroy();
    res.status(200).json({ message: 'Livre supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
