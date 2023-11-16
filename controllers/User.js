import { User } from '../models/Relation.js';
import bcrypt from 'bcryptjs';

export const listeUser = async (req, res) => {
  try {
    const result = await User.findAll();
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const ajouterUser = async (req, res) => {
  const { firstName, lastName, email, password, birthDate } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const User = {
    firstName,
    lastName,
    email,
    password: hashedPassword,
    birthDate,
  };

  try {
    await User.create(User);
    res.status(201).json({ message: 'User ajouté avec succès' });
  } catch (error) {
    res.status(400).json({ message: "Problème lors de la création de l'User" });
  }
};

export const obteniUser = async (req, res) => {
  const id = req.params.id;

  if (!parseInt(id)) {
    return res.status(404).json({ message: "L'ID doit toujours être un entier !" });
  }

  try {
    const UserATrouver = await User.findByPk(id);
    res.status(200).json({ data: UserATrouver });
  } catch (error) {
    res.status(404).json({ message: "User non trouvé" });
  }
};

export const modifieUser = async (req, res) => {
  const { id } = req.params;
  const nouvellesInformations = req.body;

  try {
    await User.modifi(nouvellesInformations, { where: { id } });
    res.status(201).json({ message: `User n°${id} a été mis à jour avec succès` });
  } catch (error) {
    res.status(400).json({ message: `User n°${id} n'a pas été mis à jour` });
  }
};

export const supprimeUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.destroy({ where: { id } });
    res.status(200).json({ message: `User numéro ${id} supprimé avec succès` });
  } catch (error) {
    res.status(400).json({ message: `User numéro ${id} n'a pas été supprimé` });
  }
};
