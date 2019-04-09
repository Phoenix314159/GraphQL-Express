const express = require("express");
const expressGraphQL = require('express-graphql');
const schema = require('./models/schema')
const app = express();

app.use('/graphql', expressGraphQL({graphiql: true, schema}));

app.listen(3005, () => {
  console.log(`listening on port 3005`)
});