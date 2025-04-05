import User from "../models/user.js"
import bcrypt from "bcryptjs"


export const createUserRegister = async (req, res) => {
    const userInfos = req.body

    if(userInfos.password !== userInfos.confirmPassword) {
        return res.status(400).send({
            success : false,
            message : "Passwords does not matches",
        })
    }

    const password = userInfos.password

    const hashedPassword = await bcrypt.hash(password, 12)

    console.log(hashedPassword)

    const newUser = await User.create({ ...userInfos, password : hashedPassword })

    res.status(201).send({
        success : true,
        message : "User account created successfully",
        data : newUser
    })

}