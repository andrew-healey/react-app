module.exports = new Promise(async (resolve, reject) => {
    const graphql = require("graphql");
    const graphqlExpress = require("express-graphql");

    const mongoose = await require("./mongoose.js");

    const schema = graphql.buildSchema(`
type Query {
}

type Mutation{
}




schema {
  query: Query
  mutation: Mutation
}
`);
    const root = {
        Query: {},
        Mutation: {},
        //Other resolvers go here
    };

    resolve((graphiql) =>
        graphqlExpress({
            schema,
            rootValue: root,
            graphiql
        }));
});
