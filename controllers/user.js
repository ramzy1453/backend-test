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

export const login = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const userExists = await User.findOne({ email : email })

    if(!userExists) {
        return res.status(400).send({
            success : false,
            message : "Email is wrong or user does not exists",
        })
    }

    // Email is correct, now we will see the password

    const isPasswordValid = await bcrypt.compare(password, userExists.password)

    if(!isPasswordValid) {
        return res.status(400).send({
            success : false,
            message : "password is wrong or user does not exists",
        })
    }

    // Everything is fine.
    


}