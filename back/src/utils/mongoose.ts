import mongoose from "mongoose";

const initDb = () : void => {
    mongoose.connect("mongodb://mongodb:27017", {user: "adm", pass: "pwd", dbName: "potions_shop"});

    mongoose.connection.on("connected", () => {
        console.log("API successfully connected to MongoDB!");
    });

    mongoose.connection.on("error", (err) => {
        console.error(err.message);
        process.exit(84);
    });
};

export default initDb;