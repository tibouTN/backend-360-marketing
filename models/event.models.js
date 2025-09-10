import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
    },
    time: {
        type: String,
        required: [true, "Time is required"],
    },
    type: {
        type: String,
        required: [true, "Type is required"],
    },
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
