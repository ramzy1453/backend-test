import express from "express"
import { createDrink, deleteDrink, getDrinkById, getDrinks, updateDrink } from "../controllers/drinks"

export const drinksRouter = express.Router()

drinksRouter.get("/drinks", getDrinks)
drinksRouter.post("/drinks", createDrink)
drinksRouter.get("/drinks/:id", getDrinkById)
drinksRouter.put("/drinks/:id", updateDrink)
drinksRouter.delete("/drinks/:id", deleteDrink)
