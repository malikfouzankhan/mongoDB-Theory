import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        minlength: [18, "User must be minimum 18 years of age"],
        maxlength: [50, "User cannot be of more than 50 years of age"]
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        requried: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const userModel = mongoose.model("users", userSchema);

export default userModel;