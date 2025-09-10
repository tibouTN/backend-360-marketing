import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    phone: {
        type: String,
        required: [true, "Phone is required"],
    },
    address: {
        type: String,
    },
    socials: {
        type: String,
        required: [true, "Socials are required"],
    },
});

const Client = mongoose.model("Client", clientSchema);
export default Client;