const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

module.exports = (app) => {
  const server = new ApolloServer({ typeDefs, resolvers });
  server.start().then(() => {
    server.applyMiddleware({ app, path: '/graphql' });
  });
};