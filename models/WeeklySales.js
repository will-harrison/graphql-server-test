module.exports = (db) => {
  let WeeklySales = db.createModel("WeeklySales", {
    "NetQty": db.type.number(),
    "sku": db.type.string(),
    "weekEndDate": db.type.date()
  });

  return WeeklySales;
}