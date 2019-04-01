const graphql = require('graphql');
const Author = require('../models/author');
const AuthorType = require('../schemas/author');
const {
  GraphQLID,
  GraphQLList,
} = graphql;

const author = {
  type: AuthorType,
  args: {id: {type: GraphQLID }},
  resolve(parent, args) {
    return Author.findById(args.id);
  }
}

const authors = {
  type: new GraphQLList(AuthorType),
  resolve(parent, args) {
    return Author.find({});
  }
}

module.exports = { author, authors }