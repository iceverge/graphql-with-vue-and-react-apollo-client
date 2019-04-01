const graphql = require('graphql');
const Author = require('../models/author');
const AuthorType = require('../schemas/author');

const {
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull
} = graphql;

const addAuthor = ({
  type: AuthorType,
  args: {
    name: {type: new GraphQLNonNull(GraphQLString)},
    age: {type: new GraphQLNonNull(GraphQLInt)}
  },
  resolve(parent, args) {
    let author = new Author({
      name: args.name,
      age: args.age
    });
    return author.save();
  }
})

const updateAuthor = ({
  type: AuthorType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    age: {type: new GraphQLNonNull(GraphQLInt)}
  },
  resolve(parent, args) {
    return Author.findOneAndUpdate(
      args.id,
      {
        $set: {
          name: args.name,
          age: args.age
        }
      },
      { new: true }
    )
  }
});

module.exports = { addAuthor, updateAuthor }