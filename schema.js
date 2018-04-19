import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = [`
  type Item {
    category: String,
    item: String,
    sku: String,
    itemDesc: String,
    colorDesc: String,
    promo: String,
    WTDSales: Int,
    planAPS: Int,
    storeGroup: String,
    unitCost: Int,
    retailPrice: Int,
    priceStatus: String,
    department: String,
    id: String
    weeklySales: [WeeklySales]
  }

  type WeeklySales {
    NetQty: Int,
    sku: String,
    weekEndDate: String,
    item: [Item]
  }
  
  type Query {
    getAllItems: [Item]
    getItem(sku: String, id: String, item: String): [Item]
    weeklySales(sku: String, weekEndingDate: String): [WeeklySales]
  }
`]

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema