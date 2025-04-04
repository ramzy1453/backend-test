import express from "express"

const app = express()

app.use(express.json())


const drinks = []

app.get("/drinks", (req, res) => {
    res.status(200).send({
        success : true,
        message : "Drinks fetched successfully",
        data : drinks
    })
})

app.get("/drinks/:id", (req, res) => {
    const id = req.params.id

    const myDrink = drinks[id]

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
})


app.post("/drinks", (req, res) => {
    const drinkInfos = req.body

    console.log(drinkInfos)

    drinks.push(drinkInfos)

    res.status(200).send({
        success : true,
        message : "Drink added successfully",
    })
})

app.put("/drinks/:id", (req, res) => {
    const id = req.params.id
    const myDrink = drinks[id]

    if(myDrink) {
        // to update
        drinks[id] = req.body

        res.status(200).send({
            success : true,
            message : "Drink updated successfully",
        })
    }
    else {
        res.status(404).send({
            success : false,
            message : "Drink does not exist",
        })
    }
})

app.delete("/drinks/:id", (req, res) => {
    const id = req.params.id
    const myDrink = drinks[id]

    if(myDrink) {
        // to delete
        drinks.splice(id, 1)

        res.status(200).send({
            success : true,
            message : "Drink removed successfully",
        })
    }
    else {
        res.status(404).send({
            success : false,
            message : "Drink does not exist",
        })
    }
})



app.get("/", (req, res) => {
    res.send("welcome to FastFoodApi")
})

app.listen(5000, () => {
    console.log("Server is running on PORT 5000")
})