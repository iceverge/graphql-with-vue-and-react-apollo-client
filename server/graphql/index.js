const graphql = require('graphql');
const RootQuery = require('./resolvers/index');
const Mutation = require('./mutations/index');

const {
  GraphQLSchema
} = graphql;

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});