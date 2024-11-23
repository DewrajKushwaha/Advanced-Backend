import { Router } from "express";
import {registerUserd} from "../controllers/user.controllers"
const router =Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)

export default router