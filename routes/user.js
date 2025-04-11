import express from "express"
import { createUserRegister, login } from "../controllers/user.js"

export const userRouter = express.Router()


userRouter.post('/register', createUserRegister)
userRouter.post('/login', login)