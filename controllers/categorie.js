// controllers/categorie.js

import { validationResult } from 'express-validator';
import { Categorie } from '../models/Relation.js'; 

// Ajouter une catégorie
export const creerCategorie = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: "svp ce champ doit contenir une categorie"() });
  }

  try {
    const nouvelleCategorie = await Categorie.create(req.body);
    res.status(201).json(nouvelleCategorie);
  } catch (error) {
    res.status(400).json({ error: "ajouter avec succes" });
  }
};

// Lister toutes les catégories avec pagination
export const listerCategories = async (req, res) => {
  try {
   // const { page = 1, pageSize = 10 } = req.query;
    //const limit = parseInt(pageSize, 10);
    //const offset = (parseInt(page, 10) - 1) * limit;

    const result = await Categorie.findAll(
  
    );

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

// Obtenir les détails d'une catégorie
export const obtenirCategorie = async (req, res) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id);
    if (!categorie) {
      return res.status(404).json({ error: 'Catégorie non trouvée' });
    }
    res.status(200).json(categorie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Modifier une catégorie
export const modifierCategorie = async (req, res) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id);
    if (!categorie) {
      return res.status(404).json({ error: 'Catégorie non trouvée' });
    }
    const categorieModifiee = await categorie.update(req.body);
    res.status(200).json(categorieModifiee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer une catégorie
export const supprimerCategorie = async (req, res) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id);
    if (!categorie) {
      return res.status(404).json({ error: 'Catégorie non trouvée' });
    }
    await categorie.destroy();
    res.status(200).json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
