const app = require("express")();

const graphql = require("./graphql.js");

app.use("/graphiql",graphql(true));

module.exports.default=app;
