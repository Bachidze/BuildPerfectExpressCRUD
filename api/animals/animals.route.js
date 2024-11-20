const { Router } = require("express");
const {
  getAllAnimals,
  getById,
  addItem,
  deleteItem,
  updateItem,
} = require("./animals.service");

const animalsRouter = Router();

animalsRouter.get("/", getAllAnimals);

animalsRouter.get("/:id", getById);

animalsRouter.post("/", addItem);

animalsRouter.delete("/:id", deleteItem);

animalsRouter.put("/:id", updateItem);

module.exports = animalsRouter;
