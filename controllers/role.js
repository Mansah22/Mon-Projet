import { Role } from '../models/Relation.js';

// Créer un nouveau rôle
export const creerRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.status(201).json(role);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Lister tous les rôles
export const listerRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir un rôle par ID
export const obtenirRole = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (role) {
      res.status(200).json(role);
    } else {
      res.status(404).json({ error: 'Rôle non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un rôle
export const modifierRole = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (role) {
      const updatedRole = await role.update(req.body);
      res.status(200).json(updatedRole);
    } else {
      res.status(404).json({ error: 'Rôle non trouvé' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un rôle
export const supprimerRole = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (role) {
      await role.destroy();
      res.status(200).json({ message: 'Rôle supprimé avec succès' });
    } else {
      res.status(404).json({ error: 'Rôle non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
