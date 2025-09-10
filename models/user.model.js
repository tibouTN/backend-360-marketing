import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"],

    },
    role: {
        type: String,
        required: [true, "Role is required"],
        enum: ["Manager", "ResponsableCommercial","commercial"],
    },
});


const User = mongoose.model("User", userSchema);

export default User;
