console.log("menu.model.js");
const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Menu item must have a name"],
        minlength: [3, "Name must be 3 charactes or longer"]
    },
    price: {
        type: Number,
        required: [true, "Menu item must have a price"],
        min: [0, "Price cannot be less than 0"]
    },
    course: {
        type: String,
        required: [true, "Menu item must have a course"]
    },
}, {timestamps: true});

module.exports = mongoose.model("Menu", MenuSchema);