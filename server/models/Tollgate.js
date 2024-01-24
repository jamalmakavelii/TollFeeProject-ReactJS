import mongoose from "mongoose";

const tollgateSchema = new mongoose.Schema({
    expressway: {type: String},
    entrypoint: {type: String, required: true,},
    exitpoint: {type: String, requried: true},
    classnumber: {type: String},
    vehicle: {type: String},
    price: {type: String},
})

const tollgateModel = mongoose.model ('Tollgate', tollgateSchema)
export {tollgateModel as Tollgate}