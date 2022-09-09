import mongoose, { Schema } from "mongoose";

const UserSchema : Schema = new Schema({
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
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    pwd: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    }
});

export const User = mongoose.model("User", UserSchema);