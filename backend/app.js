module.exports = new Promise(async (resolve, reject) => {
    const app = require("express")();
  const bodyParser=require("body-parser");

    const graphql = await require("./graphql.js");

  const endpoint="/graphql";
  const {graphql:api,graphiql}=graphql(endpoint);
    app.use(endpoint, bodyParser.json(), api);
  app.use("/graphiql",graphiql);

    resolve(app);

});
