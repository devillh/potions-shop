import express, { Express, Request, Response, NextFunction } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import "dotenv/config";
import initDb from "./utils/mongoose";

import Potions from "./routes/potions";
import Users from "./routes/users";
import SwaggerOptions from "./utils/swagger";

// network set up
const app : Express = express();
const port : number = Number(process.env.PORT) || 5000;

app.listen(port, () : void => {
    console.log("Server is running on port " + port);
});

// personalize headers and responses of the database requests
app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
    res.append("Access-Control-Allow-Origin", "*");
    res.append("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.append("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

// database initialization
initDb();

// MongoDB models and API documentation can be reached in the back-end
app.use("/potions", Potions);
app.use("/users", Users);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(SwaggerOptions)));

export default app;