const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());


// new database code here

const mongoose = require("mongoose");
const db_name = "italian_restaurant";
mongoose.connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Successfully connected to ${db_name}`))
    .catch(errors => console.log("Something went wrong", errors));

// what the objects in the db should look like
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

// variable that we use to communicate with the db
const Menu = mongoose.model("Menu", MenuSchema);

// routes / controller code

app.get("/api/test", (req, res) => {
    res.json({msg: "ok"});
});

app.get("/api/menu", (req, res) => {
    Menu.find({})
        .then(menuItems => res.json(menuItems))
        .catch(err => res.json(err));
});

app.post("/api/menu", (req, res) => {
    const menuItem = new Menu(req.body);
    menuItem.save()
        .then(() => res.json(menuItem))
        .catch(err => res.json(err));
});

app.listen(port, () => console.log(`Listening on port ${port}`));