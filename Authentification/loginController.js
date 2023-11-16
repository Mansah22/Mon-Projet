import { User } from "../models/Relation.js";
// Le module du hachage
import bcrypt from 'bcryptjs';
// Le module pour la creation du jeton (token)
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "L'email et le mot de passe sont obligatoires !" });
  }

  try {
    // Chercher l'utilisateur dans la base de données
    const utilisateur = await User.findOne({ where: { email } });

    if (!utilisateur) {
      return res.status(404).json({ message: "Pas d'utilisateur avec cet email" });
    }

    // Vérification du mot de passe
    const isPasswordValid = bcrypt.compareSync(password, utilisateur.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }

    // Génération du token JWT
    const payload = { id: utilisateur.id };
    const token = jwt.sign(payload, process.env.CODE_SECRET);

    res.status(200).json({ data: utilisateur, token });
  } catch (error) {
    return res.status(500).json({ message: "Erreur lors de la connexion" });
  }
};
