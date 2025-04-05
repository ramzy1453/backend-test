import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minLength : 8
    },
    username : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        default : 18,
        min : 18
    }
})

const User = mongoose.model("User", userSchema)
export default User