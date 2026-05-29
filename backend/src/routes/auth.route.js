import express from 'express'
import { arcjetProtection } from '../middleware/arcjet.middleware.js';
import { signup, login, logout, updateProfile } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

//router.use(arcjetProtection);

router.post("/signup", signup)

router.post("/login",  login)

router.post("/logout", logout)

router.put("/update-profile", arcjetProtection, protectRoute, updateProfile)


export default router;