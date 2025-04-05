import express from "express"
import mongoose from "mongoose"
import Drink from "./models/drinks.js"
import { drinksRouter } from "./routes/drinks.js"

const app = express()

app.use(express.json())


app.use("/drinks", drinksRouter)


app.get("/", (req, res) => {
    res.send("welcome to FastFoodApi")
})

app.listen(5000, () => {
    console.log("Server is running on PORT 5000")
})

mongoose
.connect("mongodb+srv://messiwassim2006:pass1%40@cluster0.hxod3k0.mongodb.net/ramzy?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected to DB")
})