import express from "express"
const router = express.Router()
import {loginController, signUpController} from "../controllers/user.controllers.js"

router.post("/login", loginController)
router.post("/register",signUpController)

export default router