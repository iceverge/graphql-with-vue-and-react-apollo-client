const graphql = require('graphql');
const _ = require('lodash');
const Book = require('../models/book');
const BookType = require('../schemas/book');

const {
  GraphQLID,
  GraphQLList,
} = graphql;

const book = {
  type: BookType,
  args: {id: {type: GraphQLID}},
  resolve(parent, args) {
    return Book.findById(args.id);
  }
}

const books = {
  type: new GraphQLList(BookType),
  resolve(parent, args) {
    return Book.find({});
  }
}

module.exports = { book, books }