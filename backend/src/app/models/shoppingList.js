let shoppingLists = []; 

class ShoppingList {
  
  static getAll() {
    return shoppingLists;
  }

  
  static getById(id) {
    return shoppingLists.find((list) => list.id === id);
  }
  
  static create({ name, items }) {
    if (typeof name !== "string" || !Array.isArray(items)) {
      throw new Error("Invalid input: 'name' must be a string, and 'items' must be an array");
    }

    const newShoppingList = {
      id: Date.now().toString(), // Generate a unique ID
      name,
      items: items || [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    shoppingLists.push(newShoppingList);
    return newShoppingList;
  }

  
  static update(id, updates) {
    const index = shoppingLists.findIndex((list) => list.id === id);
    if (index === -1) {
      throw new Error("Shopping list not found");
    }

    const updatedList = {
      ...shoppingLists[index],
      ...updates,
      updatedAt: new Date(),
    };

    shoppingLists[index] = updatedList;
    return updatedList;
  }

  
  static delete(id) {
    const index = shoppingLists.findIndex((list) => list.id === id);
    if (index === -1) {
      throw new Error("Shopping list not found");
    }

    shoppingLists.splice(index, 1);
    return true;
  }
}
module.exports = ShoppingList;