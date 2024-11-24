const shoppingLists = []; // Temporary storage for shopping lists

const shoppingListController = {
  createShoppingList(req, res) {
    const { name, items } = req.validatedData;

    const newList = {
      id: Date.now().toString(),
      name,
      items: items || [],
    };

    shoppingLists.push(newList);

    res.status(201).json({
      data: newList,
      uuAppErrorMap: {},
    });
  },

  getShoppingLists(req, res) {
    res.status(200).json({
      data: shoppingLists,
      uuAppErrorMap: {},
    });
  },

  addItemToShoppingList(req, res) {
    const { listId, item } = req.validatedData;

    const list = shoppingLists.find((list) => list.id === listId);

    if (!list) {
      return res.status(404).json({
        uuAppErrorMap: { errorType: "NotFound", message: "Shopping list not found." },
      });
    }

    list.items.push(item);

    res.status(200).json({
      data: list,
      uuAppErrorMap: {},
    });
  },
};

module.exports = shoppingListController;