import Drink from "../models/drinks.js"

export const getDrinks = async (req, res) => {

    const drinks = await Drink.find()

    res.status(200).send({
        success : true,
        message : "Drinks fetched successfully",
        data : drinks
    })
    
}

export const getDrinkById = async (req, res) => {
    const id = req.params.id

    const myDrink = await Drink.findById(id)

    if(myDrink) {
        res.status(200).send({
            success : true,
            message : "Drink fetched successfully",
            data : myDrink
        })
    }
    else {
        res.status(404).send({
            success : false,
            message : "Drink does not exist",
        })
    }
}

export const createDrink = async (req, res) => {
    const drinkInfos = req.body

    const newDrink = await Drink.create(drinkInfos)

    res.status(200).send({
        success : true,
        message : "Drink added successfully",
        data : newDrink
    })
}

export const updateDrink = async (req, res) => {
    const id = req.params.id
    const newInfos = req.body
    const updatedDrink = await Drink.findByIdAndUpdate(id, newInfos, { new : true })
    res.status(200).send({
        success : true,
        message : "Drink updated successfully",
        data : updatedDrink
    })
   
}
export const deleteDrink = async (req, res) => {
    const id = req.params.id
    const deletedDrink = await Drink.findByIdAndDelete(id)

    res.status(200).send({
        success : true,
        message : "Drink removed successfully",
        data : deletedDrink
    })
}