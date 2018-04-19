module.exports = (db) => {
  let Item = db.createModel("Item", {
    category: db.type.string(),
    item: db.type.string(),
    sku: db.type.string(),
    itemDesc: db.type.string(),
    colorDesc: db.type.string(),
    promo: db.type.string(),
    WTDSales: db.type.number(),
    planAPS: db.type.number(),
    storeGroup: db.type.string(),
    unitCost: db.type.number(),
    retailPrice: db.type.number(),
    priceStatus: db.type.string(),
    department: db.type.string()
  });

  return Item;
}