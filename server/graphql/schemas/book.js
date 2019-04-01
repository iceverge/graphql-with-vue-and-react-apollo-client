const graphql = require('graphql');
const Author = require('../models/author');
const {
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLID,
} = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'Book type fields',
  fields: () => {
    const AuthorType = require('./author')
    return {
      id: {type: GraphQLID},
      name: {type: GraphQLString},
      genre: {type: GraphQLString},
      author: {
        type: AuthorType,
        resolve(parent, args) {
          return Author.findById(parent.authorId);
        }
      }
    }
  }
});

module.exports = BookType