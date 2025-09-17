import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, "Amount is required"],
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
});

const Income = mongoose.model("income", incomeSchema);

export default Income;