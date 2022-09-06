import { Options } from "swagger-jsdoc";

const SwaggerOptions : Options = {
    swaggerDefinition: {
        openapi: "3.0.1",
        info: {
            title: "Potions Shop's API",
            version: "1.0.0",
            description: "A little website where you can sell and buy the best potions on the market.",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Héloïse de Villepin",
                url: "https://villepin-it.com",
                email: "heloise@villepin-it.com",
            },
        },
        servers: [
            {
                url: "http://localhost:" + process.env.PORT || "5000" + "/api/",
            },
        ]
    },
    apis: ["src/**/*.ts"],
    swagger: "2.0"
};

export default SwaggerOptions;