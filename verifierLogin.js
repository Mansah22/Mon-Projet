import jwt from 'jsonwebtoken';
import { User } from '../models/Relation.js';

export const verifierLogin = async (req, res, next) => {
  // Récupérer le token
  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    return res.status(401).json({ message: "Vous devez être authentifié !" });
  }

  // Extraire le token
  const token = bearerToken.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.CODE_SECRET);
    const utilisateur = await User.findByPk(payload.id);

    if (!utilisateur) {
      return res.status(401).json({ message: "Utilisateur introuvable" });
    }

    req.user = utilisateur
    ;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalide", error: error.message });
  }
};
