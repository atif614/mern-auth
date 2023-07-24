import express from "express";
import { authuser } from "../controllers/userController.js";
const router = express.Router();

router.post('/auth',authuser);

export default router;