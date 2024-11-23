const { Router } = require("express");
const {
  getAllAnimals,
  getById,
  addItem,
  deleteItem,
  updateItem,
} = require("./animals.service");
const isValidApiKeyMiddleware = require("../../middlewares/isValidApiKey.middleware");
const { isEditor, isAdmin, isViewer } = require("../../middlewares/isAdmin.middleware");

const animalsRouter = Router();

/* animalsRouter.use(isValidApiKeyMiddleware); */

animalsRouter.get("/", isViewer, getAllAnimals);
animalsRouter.get("/:id", isViewer, getById);
animalsRouter.post("/", isEditor, addItem);
animalsRouter.put("/:id", isEditor, updateItem);

animalsRouter.delete("/:id", isAdmin, deleteItem);

module.exports = animalsRouter;
