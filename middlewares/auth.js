import jwt from "jsonwebtoken"

export const auth = (req, res, next) => {
    const token = req.headers.authorization
    try {
        const data = jwt.verify(token, "super-secret-key")
        req.userId = data.id
        next()
    } catch (error) {
        res.send({message : "You are not authorized"})
    }
}




// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjhmNmQ1YzI5YWYwMmM0MWViY2Y5YSIsImlhdCI6MTc0NDM3OTc1MSwiZXhwIjoxNzQ0NDY2MTUxfQ.IySN4hiRoolDK08gwWPBFpSlWr5sFFoEY9mfFLAmI0Q