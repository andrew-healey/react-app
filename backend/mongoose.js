module.exports = new Promise((resolve, reject) => {
    const mongoose = require("mongoose");
    require("dotenv")();

    mongoose.connect(process.env.DATABASE.replace(/<password>/, process.env.PASSWORD), {
        useNewUrlParser: true
    });
    const db = mongoose.connection;

    //Model declarations go here

    const {
        ObjectId
    } = mongoose.Schema.Types;
    //Schema initializations go here

    db.on("error", err => reject(err));
    db.on("open", () => {
        console.log("Connected");

        //Model initializations go here

        resolve({
            //Models go here

        });

    });
});
