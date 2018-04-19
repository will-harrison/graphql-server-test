const resolvers = {
  Query: {
    getAllItems: async (parent, args, { models }) => {
      return await models.Item.filter({})
    },
    getItem: async (parent, args, { models }) => {

      return await models.Item.filter(args)
    },
    weeklySales: async (parent, args, { models }) => {
      return await models.WeeklySales.filter({ sku: args.sku })
    },
    getInventoryBySku: async (parent, args, { models }) => {
      return await models.Inventory.filter({ sku: args.sku })
    }
  },
  Item: {
    weeklySales: async (parent, args, { models }) => {
      return await models.WeeklySales
        .orderBy({ index: 'weekEndDate' })
        .filter({ sku: parent.sku })
    },
    inventory: async (parent, args, { models }) => {
      return await models.Inventory
        .filter({ sku: parent.sku })
    }
  },
  WeeklySales: {
    item: async (parent, args, { models }) => {
      return await models.Item.filter({ sku: parent.sku })
    }
  },
  Inventory: {
    item: async (parent, args, { models }) => {
      return await models.Item.filter({ sku: parent.sku })
    }
  }
}

export default resolvers