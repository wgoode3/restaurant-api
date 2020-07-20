console.log("server.js")

const express = require("express");
const cors = require("cors");
const port = 8000;
const db_name = "italian_restaurant";
const app = express();


// the order these are written in matters

app.use(cors());
app.use(express.json());

require("./server/config/mongoose")(db_name);
require("./server/routes/menu.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));