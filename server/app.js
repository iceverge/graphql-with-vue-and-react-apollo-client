const { Server } = require('http');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/index');
const mongoose = require('mongoose');
const cors = require('cors');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { execute, subscribe } = require('graphql');


const app = express();

// Allow corss-origin request
app.use(cors());

// connect to mlab database

// mongoose.connect('mongodb://iceverge:656verge@ds127644.mlab.com:27644/gql-iceverge', { useNewUrlParser: true });
mongoose.connect('mongodb://127.0.0.1:27017/owl', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

// const server = Server(app);

// SubscriptionServer.create({
//   schema,
//   execute,
//   subscribe,
// }, {
//   server: server,
//   path: '/api/ws',
// }, );

app.listen(4000, () => {
  console.log('App listen on port 4000');
});

