import express from "express";
import { port } from "./src/config/app.config.js";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger_output.json" assert {type: "json"};
import appRouter from "./src/routes/app.routes.js";
import { connectMongoDB } from "./src/database/database.js";

const app = express();

app.use(express.json());

app.use("/", appRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput));

const start = async () => {
    try {
        await connectMongoDB();

        app.listen(port, () => {
            console.log(`The service is started on http://127.0.0.1:${port}`)
        });

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();