import express from 'express'
implement-rate-limiting
import { arcjetProtection } from '../middleware/arcjet.middleware.js';
import { signup, login, logout, updateProfile } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

//router.use(arcjetProtection);

router.post("/signup", arcjetProtection, signup)

router.post("/login", arcjetProtection, login)

router.post("/logout", arcjetProtection, logout)

router.put("/update-profile", arcjetProtection, protectRoute, updateProfile)



import { protectRoute } from '../middleware/auth.middleware.js';
import { signup, login, logout, updateProfile } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);;

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, (req, res) => {
    res.status(200).json({ message: "hogya" });
})
 main


export default router;