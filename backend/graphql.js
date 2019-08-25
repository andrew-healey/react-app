module.exports = new Promise(async (resolve, reject) => {
  const mongoose = require("mongoose");
  const {
    graphqlExpress,
    graphiqlExpress
  } = require("graphql-server-express");
  const {
    makeExecutableSchema
  } = require("graphql-tools");

  const ObjectId = mongoose.Types.ObjectId;
  ObjectId.prototype.valueOf = function() {
    return this.toString();
  };

  //Import models
  const {} = await require("./mongoose.js");

  const typeDefs = `
type Query {
}

type Mutation{
}


schema {
  query: Query
  mutation: Mutation
}
`;

  let name="react-app";
  const root = {
    Query:{
    },
    Mutation:{
    },
    //Add more resolvers here
  };

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers: root
  });

  resolve((path) => ({
    graphql: graphqlExpress({
      schema
    }),
    graphiql: graphiqlExpress({
      endpointURL: path
    }),
  }));
});
