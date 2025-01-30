import express from "express"
const router = express.Router()
import {updateUserProfile, userLogin, userSignup,getAllUsers,deleteUserProfile, getUserProfile, userLogout} from "../../controllers/user.controllers.js"
import { authMiddleware, admin } from "../../middlewares/authMiddleware.js"

router.post("/login", userLogin)
router.post("/register",userSignup)
router.put("/user/:id", authMiddleware, updateUserProfile)
router.get("/profile", authMiddleware, getUserProfile)
router.delete("/user/:id", authMiddleware, admin, deleteUserProfile)
router.get("/logout",userLogout)
router.get("/", authMiddleware, admin, getAllUsers)  // accessed by admin only

export default router