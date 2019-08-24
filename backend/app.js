module.exports =new Promise(async (resolve, reject) => {
const app = require("express")();

const graphql = await require("./graphql.js");

app.use("/graphiql",graphql(true));
  resolve(app);
});
