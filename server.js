import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import cors from 'cors'
import schema from './schema'
import models from './models'

const app = express()

app.use(cors())
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(8000, () => console.log('Running on 8000'))