import { User } from "../models/Relation.js"

export const isAdmin = async (req, res, next) => {
    // Recuperation de l'id a partir de la requete
    const id = req.utilisateurId  //depuis verifierLogin
    try {
        const utilisateur= await User.findByPk(id)
        if (!utilisateur) return res.status(404).json({ message: "Cet utilisateur n'existe pas!" })

        try {
            const role = await utilisateur.getRole()
            if (role && role.firstName.toLowerCase() == 'admin') {
                next()
            } else {
                return res.status(403).json({ message: "Il faut avoir le droit admin!!" })
            }

        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }


}