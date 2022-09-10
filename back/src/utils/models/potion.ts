import mongoose, { Schema } from "mongoose";

const PotionSchema : Schema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    type: {
        type: String,
        required: false,
        lowercase: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    created: {
        type: String,
        required: true
    },
    updated: {
        type: String,
        required: false
    }
});

export const Potion = mongoose.model("Potion", PotionSchema);