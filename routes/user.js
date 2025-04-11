import express from "express"
import { createUserRegister, login, getProfile, updateProfile } from "../controllers/user.js"
import { auth } from "../middlewares/auth.js"

export const userRouter = express.Router()


userRouter.post('/register', createUserRegister)
userRouter.post('/login', login)
userRouter.get("/profile", auth, getProfile)
userRouter.put("/profile", auth, updateProfile)