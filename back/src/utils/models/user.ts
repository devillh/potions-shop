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
    desc: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String,
        required: false
    }
});

export const User = mongoose.model("User", UserSchema);