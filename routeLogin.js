import { Router } from "express";
import { login } from "../Authentification/loginController.js";

const router =Router()
router.post("/",login)


export default router