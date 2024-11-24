const express = require("express");
const shoppingListController = require("../controllers/shoppingListController");
const validate = require("../middlewares/validation");
const Joi = require("joi");

const router = express.Router();

// Validation schemas
const createSchema = Joi.object({
  name: Joi.string().required(),
  items: Joi.array().items(Joi.string()).optional(),
});

const addItemSchema = Joi.object({
  listId: Joi.string().required(),
  item: Joi.string().required(),
});

// Routes
router.post("/create", validate(createSchema), shoppingListController.createShoppingList);
router.get("/get", shoppingListController.getShoppingLists);
router.post("/add-item", validate(addItemSchema), shoppingListController.addItemToShoppingList);

module.exports = router;