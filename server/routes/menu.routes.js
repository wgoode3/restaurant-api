console.log("menu.routes.js");
const Menus = require("../controllers/menu.controller");

module.exports = app => {
    app.get("/api/test", Menus.test);
    app.get("/api/menu", Menus.getAll);
    app.post("/api/menu", Menus.create);
}