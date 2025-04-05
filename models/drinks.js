import mongoose from "mongoose"

const drinksSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minLength : 1
    },
    nature : {
        type : String,
        required : true,
        minLength : 1
    },
    price : {
        type : Number,
        default : 0,
        min : 10
    },
})
const Drink = mongoose.model('Drink', drinksSchema)
export default Drink
