const graphql = require('graphql');
const Book = require('../models/book');
const BookType = require('../schemas/book');

const {
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull
} = graphql;

const addBook  = ({
  type: BookType,
  args: {
    name: {type: new GraphQLNonNull(GraphQLString)},
    genre: {type: new GraphQLNonNull(GraphQLString)},
    authorId: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve(parent, args) {
    let book = new Book({
      name: args.name,
      genre: args.genre,
      authorId: args.authorId
    });
    return book.save();
  }
})

const updateBook = ({
  type: BookType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    genre: {type: new GraphQLNonNull(GraphQLString)},
    authorId: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve(parent, args) {
    return Book.findOneAndUpdate(
      args.id,
      {
        $set: {
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        }
      },
      { new: true }
    );
  }
});

module.exports = { addBook, updateBook }