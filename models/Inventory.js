module.exports = (db) => {
  let Inventory = db.createModel("Inventory", {
    "committedInventory": db.type.number(),
    "dueThisWeek": db.type.number(),
    "nextReceiptDate": db.type.string(),
    "onOrder": db.type.number(),
    "sku": db.type.string(),
    "storesWithInventory": db.type.number(),
    "totalInventory": db.type.number(),
    "totalOnOrder": db.type.number()
  });

  return Inventory;
}