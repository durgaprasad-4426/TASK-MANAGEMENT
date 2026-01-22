const express = require("express");
const taskCtrl = require("../controllers/taskController");
const route = express.Router();
const todoItems = require("../controllers/getController");

route.post("/add", taskCtrl.addTask);
route.get("/get", todoItems.getItems);
route.post("/update-by-id", taskCtrl.updateById);
route.delete("/delete/:id", taskCtrl.deleteById);
module.exports = route;