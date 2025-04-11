import mongoose from "mongoose"

const drinksSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minLength : 1,
        trim : true
    },
    nature : {
        type : String,
        required : true,
        minLength : 1,
        trim : true
    },
    price : {
        type : Number,
        default : 20,
        min : 10
    },
})
const Drink = mongoose.model('Drink', drinksSchema)
export default Drink
