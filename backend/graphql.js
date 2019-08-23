const graphql=require("graphql");
const graphqlExpress=require("express-graphql");

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
const root={
  Query: {},
  Mutation:{},
  //Other resolvers go here
};

module.exports.default = (graphiql)=>
  graphqlExpress({
    schema,
    rootValue:root,
    graphiql});
