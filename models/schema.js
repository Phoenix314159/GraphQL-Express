const graphqlTools = require('graphql-tools')
const pgPromise = require('pg-promise')
const {host, port, database, user, password, dbQuery} = require('../config/dev')
const typeDefs = require('./typeDefs')
const pgp = pgPromise({})
const db = pgp({host, port, database, user, password})

const resolvers = {
  Query: {
    async allData (root, args, context, info) {
      return await db.many(dbQuery)
    }
  }
}

const schema = graphqlTools.makeExecutableSchema({typeDefs, resolvers})
module.exports = schema



