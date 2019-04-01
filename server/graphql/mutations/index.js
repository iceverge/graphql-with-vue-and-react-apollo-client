const graphql = require('graphql');
const { addAuthor, updateAuthor } = require('./author')
const { addBook, updateBook } = require('./book')

const {
  GraphQLObjectType
} = graphql;

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor,
    addBook,
    updateAuthor,
    updateBook
  }
});

module.exports = Mutation