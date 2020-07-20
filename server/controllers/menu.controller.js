console.log("menu.controller.js");
const Menu = require("../models/menu.model");

class MenuController {
    test(req, res) {
        res.json({msg: "ok"});
    }
    getAll(req, res) {
        Menu.find({})
            .then(menuItems => res.json(menuItems))
            .catch(err => res.json(err));
    }
    create(req, res) {
        const menuItem = new Menu(req.body);
        menuItem.save()
            .then(() => res.json(menuItem))
            .catch(err => res.json(err));
    }
}

module.exports = new MenuController();