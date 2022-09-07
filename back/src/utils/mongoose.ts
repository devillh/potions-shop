import mongoose from "mongoose";
import "dotenv/config";

// initialization of the network between the database and the back-end
const initDb = () : void => {
    mongoose
        .connect("mongodb://mongodb:27017", {
            user: process.env.ADMIN_USER,
            pass: process.env.ADMIN_PWD,
            dbName: process.env.DB_NAME
        });

    mongoose.connection.on("connected", () => {
        console.log("API successfully connected to MongoDB!");
    });

    mongoose.connection.on("error", (err) => {
        console.error(err.message);
        process.exit(84);
    });
};

export default initDb;