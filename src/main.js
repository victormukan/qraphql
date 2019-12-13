const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphQlSchema = require('./schema');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  '/graphql',
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
  }),
);

app.listen(4000);