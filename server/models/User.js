import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    account: {type: String},
    username: {type: String, required: true, unique: true},
    password: {type: String, requried: true},
})

const userModel = mongoose.model ('User', userSchema)
export {userModel as User}