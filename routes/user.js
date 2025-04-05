import express from "express"
import { createUserRegister } from "../controllers/user.js"

export const userRouter = express.Router()


userRouter.post('/register', createUserRegister)