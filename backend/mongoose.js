const mongoose=require("mongoose");
require("dotenv")();

mongoose.connect(process.env.DATABASE.replace(/<password>/,process.env.PASSWORD),{useNewUrlParser:true});
const db=mongoose.connection;

//Schema Promise initializaions here
//Schema and Model declarations go here

const {ObjectId} = mongoose.Schema.Types;
//Schema initializations go here

db.on("error",err=>console.log("Error:",err));
db.on("open",()=>{
  console.log("Connected");

  //Model initializations go here
  
  //Resolve promises

});

module.exports = {
  //Promises go here

};
