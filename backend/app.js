const app = require("express")();

const graphql = require("./graphql.js");

app.use("/graphiql",graphql);

module.exports.default=app;
