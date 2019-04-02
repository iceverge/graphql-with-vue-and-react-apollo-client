const graphql = require('graphql');
const { book, books } = require('./book');
const { author, authors } = require('./author');

const {
  GraphQLObjectType, 
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a custom',
  fields: {
    book,
    books,
    author,
    authors
  }
});

module.exports = RootQuery