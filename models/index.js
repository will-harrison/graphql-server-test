import thinky from 'thinky'
const db = thinky({ db: 'TrendReport' })

const Item = require('./Item')(db)
const Inventory = require('./Inventory')(db)
const WeeklySales = require('./WeeklySales')(db)

module.exports = {
  Item,
  Inventory,
  WeeklySales
}
