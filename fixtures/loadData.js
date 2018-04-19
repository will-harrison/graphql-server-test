const thinky = require("thinky")({ db: "TrendReport" });
const type = thinky.type;
const item = require("./item.json");
const inventory = require("./inventory.json");
const weeklySales = require("./weeklySales.json");

const Item = thinky.createModel("Item", {
  "category": type.string(),
  "item": type.string(),
  "sku": type.string(),
  "itemDesc": type.string(),
  "colorDesc": type.string(),
  "promo": type.string(),
  "WTDSales": type.number(),
  "planAPS": type.number(),
  "storeGroup": type.string(),
  "unitCost": type.number(),
  "retailPrice": type.number(),
  "priceStatus": type.string(),
  "department": type.string()
});
Item.ensureIndex("sku");

const Inventory = thinky.createModel("Inventory", {
  "sku": type.string(),
  "committedInventory": type.number(),
  "totalInventory": type.number(),
  "storesWithInventory": type.number(),
  "dueThisWeek": type.number(),
  "nextReceiptDate": type.string(),
  "onOrder": type.number(),
  "totalOnOrder": type.number()
});
Inventory.ensureIndex("sku")
Item.hasOne(Inventory, "InventorySku", "sku", "sku");

const WeeklySales = thinky.createModel("WeeklySales", {
  "sku": type.string(),
  "weekEndDate": type.date(),
  "netQty": type.number()
});
WeeklySales.ensureIndex("sku");
Item.hasMany(Inventory, "WeeklySalesSku", "sku", "sku");

Item
  .insert(item)
  .then(res => console.log(res))
  .catch(err => console.log(err));
Inventory
  .insert(inventory)
  .then(res => console.log(res))
  .catch(err => console.log(err));
WeeklySales
  .insert(weeklySales)
  .then(res => console.log(res))
  .catch(err => console.log(err));