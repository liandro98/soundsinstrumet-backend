import express from "express";
import checkAuth from '../middleware/chekAuth.js';
import { body } from "express-validator";

import {
    login,
    verify,
    registro,
    confirmar,
    resetPasswd,
    comprobarToken,
    cambiarPass,
    logOut,
    obtenerPerfil,
    notifyRecibed
} from "../controllers/authController.js"

const router = express.Router();

// http://localhost:PUERTO/auth/rutas-de-abajo

router.post('/login',
    [
        body('email').isEmail().withMessage('Email no valido'),
        body('password').notEmpty().withMessage('La contraseña es obligatoria')
    ],
    login);
router.post('/verify', verify);
router.post('/registro', registro );
router.get('/confirmar/:tkn', confirmar);

router.post('/olvide-passwd', resetPasswd);
router.get('/olvide-passwd/:tkn', comprobarToken);
router.post('/olvide-passwd/:tkn', cambiarPass);

router.get('/logout',logOut);
router.get('/perfil', checkAuth ,obtenerPerfil);

router.get('/notify',checkAuth,notifyRecibed)

export default router;